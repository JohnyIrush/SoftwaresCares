<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app" class=".container-fluid" >
        <main>
            @yield('content')
        </main>
    </div>
    <!--styles-->
    <link href="{{ asset('css/Themes/application/dimensions.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/application/colors.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/application/positions.css') }}" rel="stylesheet">

    <!--scripts-->
    <script src="{{ asset('js/Themes/application/Theme.js') }}" defer></script>
</body>
</html>
