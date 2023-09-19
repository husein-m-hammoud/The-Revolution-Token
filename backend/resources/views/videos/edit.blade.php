@extends('layouts.app')

@section('content')
<div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Token</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('tokens.index') }}"> Back</a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('tokens.update1') }}" method="POST" enctype="multipart/form-data">
        @csrf

                    <input type="hidden" name="id" value="{{ $token->id }}" class="form-control" placeholder="Name">
         <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Name:</strong>
                    <input type="text" name="name" value="{{ $token->name }}" class="form-control" placeholder="Name">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Email:</strong>
                    <input type="email" name="email" value="{{ $token->email }}" class="form-control" placeholder="Email">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Address:</strong>
                    <input type="text" name="address" value="{{ $token->address }}" class="form-control" placeholder="Address">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Phone:</strong>
                    <input type="text" name="phone" value="{{ $token->phone }}" class="form-control" placeholder="Phone">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Base url:</strong>
                    <input type="text" name="base_url" value="{{ $token->base_url }}" class="form-control" placeholder="url">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <strong>Swap:</strong>
                    <input type="text" name="graph_url" value="{{ $token->graph_url }}" class="form-control" placeholder="uniswap/pancakeswap/...">
                </div>
            </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Text Color</strong>
                <input type="text" name="color" class="form-control" placeholder="Text Color"  value="{{ $token->color }}">
            </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Background Color</strong>
                <input type="text" name="bg_color" class="form-control" placeholder="background Color"  value="{{ $token->bg_color }}">
            </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Logo</strong>
                <input class="form-control" type="file" accept="image/* "   name="logo" placeholder="Address"/>
            </div>
        </div>

            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>
@endsection
