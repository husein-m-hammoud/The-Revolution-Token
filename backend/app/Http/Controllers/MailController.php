<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Mail;
use App\Mail\NotifyMail;


use App\Http\Requests;
use App\Http\Controllers\Controller;
use Response;

class MailController extends Controller {
   public function index()
    {

      Mail::to('husein.m.hammoud@gmail.com')->send(new NotifyMail());

      if (Mail::flushMacros()) {
           return response()->Fail('Sorry! Please try again latter');
      }else{
           return response()->json(['data' =>'Great! Successfully send in your mail']);
         }
    }
  public function contactUs(Request $request) {
    $email =$request->email;
    $phone = $request->phone;
    $message = $request->message;
    $data = [
      'email' => $email,
      'phone' => $phone,
     'message' => $message
    ];
    Mail::to($email)->send(new NotifyMail([]));
    Mail::to('admin@therevolutiontoken.com')->send(new NotifyMail($data));
    return response()->json(['data' =>'Great! Successfully send in your mail']);
  }
   public function basic_email() {
      $data = array('name'=>"Virat Gandhi");

      Mail::send(['text'=>'mail'], $data, function($message) {
         $message->to('abc@gmail.com', 'Tutorials Point')->subject
            ('Laravel Basic Testing Mail');
         $message->from('xyz@gmail.com','Virat Gandhi');
      });
      echo "Basic Email Sent. Check your inbox.";
   }
   public function html_email() {
      $data = array('name'=>"Virat Gandhi");
     $sent =  Mail::send(['mail'], $data, function($message) {
         $message->to('husein.m.hammoud@gmail.com', 'Tutorials Point')->subject
            ('Laravel HTML Testing Mail');
         $message->from('husein.m.hammoud@gmail.com','Virat Gandhi');
      });
      print_r($sent);
      echo "HTML Email Sent. Check your inbox.";
   }
   public function attachment_email() {
      $data = array('name'=>"Virat Gandhi");
      Mail::send('mail', $data, function($message) {
         $message->to('abc@gmail.com', 'Tutorials Point')->subject
            ('Laravel Testing Mail with Attachment');
         $message->attach('C:\laravel-master\laravel\public\uploads\image.png');
         $message->attach('C:\laravel-master\laravel\public\uploads\test.txt');
         $message->from('xyz@gmail.com','Virat Gandhi');
      });
      echo "Email Sent with attachment. Check your inbox.";
   }
}
