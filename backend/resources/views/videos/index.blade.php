@extends('layouts.app')

@section('content')
 <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Videos</h2>
            </div>
            <div class="pull-right my-3">
                <a class="btn btn-success" href="{{ route('videos.create') }}"> Create New Video</a>
            </div>
        </div>
    </div>

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <table class="table table-bordered">
        <tr>
            <th>Logo</th>
            <th>Status</th>
            <th>Url</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($videos as $video)
        <tr>
            <td><img style="max-width:100px" src="{{ URL::to('/').'/Image/'.$video->poster }}" /></td>
            <td>{{ $video->status }}</td>
            <td>{{ $video->url }}</td>
            <td>
                <form action="{{ route('videos.destroy', $video->id) }}" method="POST">

                    <a class="btn btn-info" href="{{ route('videos.show',$video->id) }}">Show</a>

                    <a class="btn btn-primary" href="{{ route('videos.edit',$video->id) }}">Edit</a>

                    @csrf
                    @method('DELETE')

                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>

    {!! $videos->links() !!}

@endsection
