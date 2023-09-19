<?php

namespace App\Http\Controllers;

use App\Models\Token;
use Illuminate\Http\Request;

class TokenController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth');
  }
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $tokens = Token::latest()->paginate(5);

    return view('tokens.index',compact('tokens'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    return view('tokens.create');
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $data= new Token();

    if($request->file('logo')){
      $file= $request->file('logo');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('Image'), $filename);
      $data['logo']= $filename;
    }

    $data['name'] = $request['name'];
    $data['email'] = $request['email'];
    $data['address'] = $request['address'];
    $data['phone'] = $request['phone'];
    $data['base_url'] = $request['base_url'];
    $data['graph_url'] = $request['graph_url'];

    $data['color'] = $request['color'];
    $data['bg_color'] = $request['bg_color'];

    $data->save();

    return redirect()->route('tokens.index')
                     ->with('success','Token created successfully.');
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Models\Token  $token
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    $token = Token::find($id);
    return view('tokens.show',compact('token'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Models\Token  $token
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    $token = Token::find($id);
    return view('tokens.edit',compact('token'));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\Models\Token  $token
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request)
  {
    $token = Token::find($request['id']);

    if($request->file('logo')){
      $file= $request->file('logo');
      $filename= date('YmdHi').$file->getClientOriginalName();
      $file->move(public_path('Image'), $filename);
      $token['logo']= $filename;
    }
    $token['id'] = $request['id'];
    $token['name'] = $request['name'];
    $token['name'] = $request['name'];
    $token['email'] = $request['email'];
    $token['address'] = $request['address'];
    $token['phone'] = $request['phone'];
    $token['base_url'] = $request['base_url'];
    $token['graph_url'] = $request['graph_url'];
    $token['color'] = $request['color'];
    $token['bg_color'] = $request['bg_color'];

    $token->update();

    return redirect()->route('tokens.index')
                     ->with('success','Token updated successfully');
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Models\Token  $token
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    $token = Token::find($id);
    $token->delete();

    return redirect()->route('tokens.index')
                     ->with('success','Token deleted successfully');

  }
}
