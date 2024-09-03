<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://media.istockphoto.com/id/1151849230/vector/wild-west-landscape.jpg?s=612x612&w=0&k=20&c=4opImBKptJL2nUpPHTH5ZnQ74Ef37PXmxApvIujpi1I=');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            /* changed height to min-height */
        }

        .main {
            background-color: rgba(0, 0, 0, 0.8);
            /* semi-transparent black background */
            border-radius: 8px;
            /* slightly curved corners */
            padding: 40px;
            width: 300px;
            text-align: center;
            margin-top: auto;
            /* push the box to the bottom */
        }

        .Text {
            color: #fff;
            /* white text color */
            font-size: 24px;
            /* larger text size */
            margin-bottom: 20px;
        }

        .usernameLogin,
        .password {
            width: calc(100% - 40px);
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            border-radius: 4px;
            background-color: #333;
            /* dark gray background */
            color: #fff;
            /* white text color */
            font-size: 16px;
        }

        .submit {
            width: 100%;
            padding: 8px;
            /* decreased padding for the button */
            background-color: #007bff;
            /* blue color */
            color: #fff;
            /* white text color */
            border: none;
            border-radius: 4px;
            font-size: 18px;
            /* larger text size */
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .submit:hover {
            background-color: #0056b3;
            /* slightly darker blue on hover */
        }

        .alreadyText {
            color: #fff;
            /* white text color */
            font-size: 14px;
            text-decoration: none;
            display: block;
            margin-top: 10px;
        }

        .alreadyText:hover {
            color: #ccc;
            /* light gray color on hover */
        }
    </style>
</head>

<body>
    <form action="Login.php" method="POST" class="main">
        <strong class="Text"></strong>
        <input type="text" class="usernameLogin" name="username" id="username" placeholder="Email or phone number" required>
        <input type="password" name="password" class="password" id="password" placeholder="Password" required>
        <input type="submit" id="submit" class="submit" value="Sign In">
        <a href="RegisterScreen.php" class="alreadyText">New to Invincible? Sign up now</a>
    </form>
</body>

</html>