<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('processes', function (Blueprint $table) {
              $table->id();
              $table->integer('public_id');
              $table->integer('video_id');
              $table->string('firstname');
              $table->string('lastname');
              $table->string('email');
              $table->string('phone');
              $table->string('code');
              $table->longText('question');
              $table->longText('browser');
              $table->string('progress')->default('0');
              $table->longText('answers');
              $table->longText('current_question_id');
              $table->string('grade');
              $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('processes');
    }
};
