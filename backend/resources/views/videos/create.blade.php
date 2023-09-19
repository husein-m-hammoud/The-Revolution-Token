@extends('layouts.app')

@section('content')
<div class="col-md-8 m-auto">
<div class="row">
    <div class="col-lg-12 margin-tb">
        <div class="pull-left">
            <h2>Add New Video</h2>
        </div>
        <div class="pull-right">
            <a class="btn btn-primary" href="{{ route('videos.index') }}"> Back</a>
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

<form action="{{ route('videos.store') }}" method="POST" enctype="multipart/form-data">
    @csrf

     <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>status</strong>
                 <select  id="country-dropdown" name="status" class="form-control">
                            <option value="">-- Select --</option>
                            <option value="active">Active </option>
                            <option value="inactive">Inactive</option>

                        </select>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Poster</strong>
                <input class="form-control" type="file" accept="image/* "   name="poster" placeholder="poster"/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-group">
                <strong>Video</strong>
                <input class="form-control" type="file" accept="video/* "   name="video" placeholder="video"/>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>

</form>
    </div>
@endsection
