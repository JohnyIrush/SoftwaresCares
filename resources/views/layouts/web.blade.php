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

    <!--styles-->
    <!--Application styles-->
    <link href="{{ asset('css/Themes/Application/dimensions.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/Application/colors.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/Application/positions.css') }}" rel="stylesheet">

    <!--Web styles-->

    <link href="{{ asset('css/Themes/Web/dimensions.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/Web/colors.css') }}" rel="stylesheet">
    <link href="{{ asset('css/Themes/Web/positions.css') }}" rel="stylesheet">

    <!--scripts-->
</head>
<body>
    <div id="app" class=".container-fluid" >
        <main>
            @yield('content')
        </main>
    </div>


</body>
</html>
