<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TokenController;
use App\Http\Controllers\Api\QuizController;
use App\Http\Controllers\MailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('tokens', TokenController::class);
Route::get('sendhtmlemail',[MailController::class ,'index']);
Route::post('contact-us',[MailController::class ,'contactUs']);

Route::get('getActiveVideo',[QuizController::class ,'getActiveVideo']);
Route::post('start-quiz',[QuizController::class ,'startQuiz']);
Route::post('check-code',[QuizController::class ,'checkCode']);
Route::post('resend-code',[QuizController::class ,'resendCode']);
Route::post('next-step',[QuizController::class ,'nextStep']);
Route::post('first-step',[QuizController::class ,'firstStep']);
