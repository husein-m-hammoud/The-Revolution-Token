<?php

namespace App\Models;

use Mail;
use App\Mail\NotifyMail;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Process extends Model
{
    use HasFactory;
    /**
   * Random number generator
   */
  public function randomNumber($length) {
    $result = '';

    for($i = 0; $i < $length; $i++) {
      $result .= mt_rand(0, 9);
    }

    return $result;
  }

    public function getcodeAndPublicId(){
        $random_num = $this->randomNumber(8);
        $public_id = date('YmdHisu').$random_num;
        $code = $this->randomNumber(6);

        $result['public_id'] = $public_id;
        $result['code'] = $code;
        return $result;
    }

  public function sendCode($request_data) {
    $email =$request_data['email'];
    $code = $request_data['code'];
    $data = [
      'email' => $email,
      'code' => $code,
    ];
    Mail::to($email)->send(new NotifyMail($data));
    return true;
  }
}
