<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;
use App\Http\Controllers\TokenController;

use App\Http\Controllers\VideoController;
use App\Http\Controllers\MailController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('dashboard', [CustomAuthController::class, 'dashboard']);
Route::get('login', [CustomAuthController::class, 'index'])->name('login');
Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom');
Route::get('registration', [CustomAuthController::class, 'registration'])->name('register-user');
Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom');
Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');



Route::get('videos', [VideoController::class, 'index'])->name('videos.index');
Route::get('videos/add', [VideoController::class, 'create'])->name('videos.create');
Route::post('videos/add', [VideoController::class, 'store'])->name('videos.store');
Route::post('videos/', [VideoController::class, 'store'])->name('videos.store');
Route::Delete('/videos/destroy/{id}', [VideoController::class, 'destroy'])->middleware('auth')->name('videos.destroy');
Route::get('/videos/show/{id}', [VideoController::class, 'show'])->middleware('auth')->name('videos.show');

Route::get('videos/edit/{id}', [VideoController::class, 'edit'])->name('videos.edit');
Route::post('videos/update', [VideoController::class, 'update'])->name('videos.update1');


Route::get('tokens', [TokenController::class, 'index'])->name('tokens.index');
Route::get('tokens/add', [TokenController::class, 'create'])->name('tokens.create');
Route::post('tokens/add', [TokenController::class, 'store'])->name('tokens.store');
Route::post('tokens/', [TokenController::class, 'store'])->name('tokens.store');
Route::Delete('/tokens/destroy/{id}', [TokenController::class, 'destroy'])->middleware('auth')->name('tokens.destroy');
Route::get('/tokens/show/{id}', [TokenController::class, 'show'])->middleware('auth')->name('tokens.show');

Route::get('tokens/edit/{id}', [TokenController::class, 'edit'])->name('tokens.edit');
Route::post('tokens/update', [TokenController::class, 'update'])->name('tokens.update1');

