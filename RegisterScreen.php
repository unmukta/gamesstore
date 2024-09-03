<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('https://cdn.pixabay.com/photo/2020/03/22/06/57/game-background-4956017_1280.jpg');
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .main {
            background-color: rgba(0, 0, 0, 0.8);
            border-radius: 8px;
            padding: 40px;
            width: 300px;
            text-align: center;
            margin-top: auto;
        }

        .Text {
            color: #fff;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .username,
        .email,
        .password {
            width: calc(100% - 40px);
            padding: 10px;
            margin-bottom: 20px;
            border: none;
            border-radius: 4px;
            background-color: #333;
            color: #fff;
            font-size: 16px;
        }

        .submit {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .submit:hover {
            background-color: #0056b3;
        }

        .alreadyText {
            color: #fff;
            font-size: 14px;
            text-decoration: none;
            display: block;
            margin-top: 10px;
        }

        .alreadyText:hover {
            color: #ccc;
        }
    </style>
</head>

<body>
    <form action="Register.php" method="POST" class="main">
        <strong class="Text"></strong>
        <input type="text" class="username" name="username" id="username" placeholder="Enter username" required>
        <input type="email" name="email" class="email" id="email" placeholder="Enter email" required>
        <input type="password" name="password" class="password" id="password" placeholder="Enter password" required>
        <input type="submit" id="submit" class="submit" value="Register">
        <a href="LoginScreen.php" class="alreadyText">Already have an account? Click to Login</a>
    </form>
</body>

</html>