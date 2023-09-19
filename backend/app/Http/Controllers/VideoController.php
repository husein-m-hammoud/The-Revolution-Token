<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;

class VideoController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $videos = Video::latest()->paginate(5);

    return view('videos.index',compact('videos'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
    return view('videos.create');
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
    $data= new Video();

    if($request->file('poster')){
      $file= $request->file('poster');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('Image'), $filename);
      $data['poster']= $filename;
    }

    if($request->file('video')){
      $file= $request->file('video');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('video'), $filename);
      $data['url']= $filename;
    }

    $data['status'] = $request['status'];

    $data->save();

    return redirect()->route('videos.index')
                     ->with('success','Video created successfully.');
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    $video = Video::find($id);
    return view('videos.edit',compact('video'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {

    //
    $video = Video::find($request['id']);

    if($request->file('poster')){
      $file= $request->file('poster');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('Image'), $filename);
      $video['poster']= $filename;
    }

    if($request->file('video')){
      $file= $request->file('video');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('Image'), $filename);
      $video['url']= $filename;
    }
    $video['id'] = $request['id'];
    $video['status'] = $request['status'];
    $video->update();

    return redirect()->route('videos.index')
                     ->with('success','Video updated successfully');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
    $video = Video::find($id);
    $video->delete();

    return redirect()->route('videos.index')
                     ->with('success','Video deleted successfully');

  }
}
