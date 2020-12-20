<?php

use Illuminate\Support\Facades\Route;


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

Auth::routes();


/**
 *Displays the Application View
 *Application View is used by administrator
 *To manage SoftwaresCares Application
 */

Route::get('SoftwaresCares','App\Http\Controllers\Themes\ApplicationController@Theme')->name('SoftwaresCares');

/**
 *This is the theme of
 * SoftwaresCares website
 */

Route::get('/','App\Http\Controllers\Themes\WebController@Theme')->name('/');


/**
 * Library Plugin -> Handles Media storage 
 * For The superblog package but can also
 * be used to manage the application storage
 * Media(video, audio, text files) -> All 
 * uploads
*/

