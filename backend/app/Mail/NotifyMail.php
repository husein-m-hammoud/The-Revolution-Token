<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NotifyMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data = null)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      if(isset($this->data['code'])) {
        return $this->view('emails.sendCode')
                    ->from('rewards@trtl2e.com', 'rewards')
                    ->subject('Verification code')
                    ->with(['data' => $this->data]);
      }
        return $this->view('emails.demoMail',['data' => $this->data]);
    }
}
