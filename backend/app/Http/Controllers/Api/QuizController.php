<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Models\Process;
use App\Models\Questions;
use App\Models\Answers;
use Illuminate\Http\Request;

class QuizController extends Controller
{

  public function __construct()
  {
    $this->max_questions = 10;
  }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getActiveVideo()
    {
         $video = Video::where('status','=','active')->first();
         return response()->json([
            'status' => true,
            'video' => $video
        ]);

    }

  public function startQuiz(Request $request) {

    $video = Video::where('status','=','active')->first();
    $questions = Questions::where('status','=','active')->where('video_id', $video->id)->pluck('id')->toArray();
    $emails_test = ['husein.m.hammoud@gmail.com', 'faysaltherevolutiontoken@gmail.com'];

    ## Add browser info
    $browser_info = json_encode([
      'remote_address' => isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : '',
      'user_agent' => isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '',
      'browser_lang' => isset($_SERVER['HTTP_ACCEPT_LANGUAGE']) ? $_SERVER['HTTP_ACCEPT_LANGUAGE'] : ''
    ]);

    shuffle($questions);
    $questions_ids = array_slice($questions, 0, $this->max_questions);

    $Process = new Process();
    if(!in_array($request['email'], $emails_test)) {
      $check_for_email = Process::where('email','=',$request['email'])->where('video_id', $video->id)->get();
      if(count($check_for_email) > 0) {
        $message = [
          'data' => [
            'component' => 'message',
            'message' => 'sorry! you have already taken a quiz before, please wait for the next Quiz',
            'check' => $check_for_email
          ],
          'public_id' => ''
        ];
        return response()->json([
          'status' => true,
          'request' => $message
        ]);

      }
    }
    $public_id_and_code = $Process->getcodeAndPublicId();
    $Process['firstname'] = $request['firstname'];
    $Process['lastname'] = $request['lastname'];
    $Process['email'] = $request['email'];
    $Process['phone'] = $request['phone'];
    $Process['browser'] = $browser_info;
    $Process['video_id'] = $video->id;
    $Process['public_id'] = $public_id_and_code['public_id'];
    $Process['code'] = $public_id_and_code['code'];
    $Process['question'] = json_encode($questions_ids);
    $Process->save();

    $sendCode_data = ['email'=> $request['email'], 'code' => $public_id_and_code['code']];
    $sendCode = $Process->sendCode($sendCode_data);

    $result = [
      'data' => [
        'component' => 'code',
        'firstname' => $request['firstname'],
      ],
      'public_id' => $public_id_and_code['public_id']
    ];
    return response()->json([
      'status' => true,
      'request' => $result
    ]);
  }

    public function checkCode(Request $request) {

      $public_id = $request['publicId'];
      $code = $request['code'];
      $process = Process::where('public_id','=',$public_id)->first();
      $correct_pin_code = $process['code'];
      $code_is_correct = false;
      if ($correct_pin_code == $code) {
        $code_is_correct = true;
    }
         return response()->json([
            'status' => true,
            'request' => $code_is_correct
        ]);

    }

    public function resendCode(Request $request) {

      $public_id = $request['publicId'];
      $process = Process::where('public_id','=',$public_id)->first();
      $Process = new Process();
      $public_id_and_code = $Process->getcodeAndPublicId();
      $new_code = $public_id_and_code['code'];
      $process['code'] = $new_code;
      $process->update();

      $sendCode_data = ['email'=> $process['email'], 'code' => $new_code];
      $sendCode = $Process->sendCode($sendCode_data);

      return response()->json([
        'status' => true,
      ]);

    }

    public function firstStep(Request $request) {

      $public_id = $request['publicId'];
      $process = Process::where('public_id','=',$public_id)->first();
      $questions_ids = json_decode($process['question']);
      $questions_id = $questions_ids[$process['current_question_id']];

      $question = Questions::find($questions_id);
      $answers = Questions::find($questions_id)->answer()->get();



        $result = [
          'data' => [
          'question' => $question,
          'answers' => $answers,
          'component' => 'mcq',
          ]
        ];
         return response()->json([
            'status' => true,
            'request' => $result
        ]);

    }


    public function nextStep(Request $request) {

      $public_id = $request['publicId'];
      $process = Process::where('public_id','=',$public_id)->first();

      //Check if answer is correct
      $answer =  Answers::find($request['answer_id']);

      if($answer['correct']) {
        $process['grade']  = $process['grade'] + 1 ;
      }

      if(($process['current_question_id']+1)  == $this->max_questions) {
        $process['progress'] = (($process['current_question_id']+1) / $this->max_questions) * 100;
        $process->Update();
        $result = [
          'data' => [
          'progress' =>  $process['progress'],
          'grade' =>  $process['grade']*10,
          'component' => 'grade',
          ]
        ];
         return response()->json([
            'status' => true,
            'request' => $result
        ]);

      }
      $questions_ids = json_decode($process['question']);
      $questions_id = $questions_ids[$process['current_question_id']+1];
     $process['current_question_id'] = $process['current_question_id'] + 1;
     $process['progress'] = ($process['current_question_id'] / $this->max_questions) * 100;


     $process->Update();

      $question = Questions::find($questions_id);
      $answers = Questions::find($questions_id)->answer()->get();



        $result = [
          'data' => [
          'question' => $question,
          'answers' => $answers,
          'progress' =>  $process['progress'],
          'component' => 'mcq',
          ]
        ];
         return response()->json([
            'status' => true,
            'request' => $result
        ]);


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function show(Token $token)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function edit(Token $token)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Token $token)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Token  $token
     * @return \Illuminate\Http\Response
     */
    public function destroy(Token $token)
    {
        //
    }
}
