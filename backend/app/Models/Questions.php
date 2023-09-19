<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;

  public function video()
  {
      return $this->belongsTo(Video::class, 'video_id');
  }

  public function answer()
  {
      return $this->hasMany(Answers::class, 'question_id')->select(['id', 'answer',]);
  }
}
