@extends('layouts.app')

@section('content')
 <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Tokens</h2>
            </div>
            <div class="pull-right my-3">
                <a class="btn btn-success" href="{{ route('tokens.create') }}"> Create New Token</a>
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
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Base url</th>
            <th>Graph url</th>
            <th>Status</th>
            <th>Address</th>
            <th width="280px">Action</th>
        </tr>
        @foreach ($tokens as $token)
        <tr>
            <td><img style="max-width:100px" src="{{ URL::to('/').'/Image/'.$token->logo }}" /></td>
            <td>{{ $token->name }}</td>
            <td>{{ $token->email }}</td>
            <td>{{ $token->phone }}</td>
            <td>{{ $token->base_url }}</td>
            <td>{{ $token->graph_url }}</td>
            <td>{{ $token->status }}</td>
            <td>{{ $token->address }}</td>
            <td>
                <form action="{{ route('tokens.destroy', $token->id) }}" method="POST">

                    <a class="btn btn-info" href="{{ route('tokens.show',$token->id) }}">Show</a>

                    <a class="btn btn-primary" href="{{ route('tokens.edit',$token->id) }}">Edit</a>

                    @csrf
                    @method('DELETE')

                    <button type="submit" class="btn btn-danger">Delete</button>
                </form>
            </td>
        </tr>
        @endforeach
    </table>

    {!! $tokens->links() !!}

@endsection
