# DevHub

Devhub is a social community platform where users can write posts and comments. See who's online and stuff.

## Installation

```bash
git clone https://github.com/hernqvistdaniel/devhub.git

cd devhub

npm install
```

Add default.json in the config folder with your own credentials:

```bash
{
  "mongoURI": "mongodb+srv://USERNAME_HERE:PASSWORD_HERE@SERVER_NAME.mongodb.net/test?retryWrites=true&w=majority",
  "jwtToken": "THIS_IS_JWT_TOKEN",
  "githubClientId": "THIS_IS_GITHUB_CLIENT_ID",
  "githubSecret": "THIS_IS_GITHUB_SECRET"
}
```

## Usage

```bash
npm run dev
```

You will be notified in the console of the served adress of the application.

## Contributing

Open Source

## License

[MIT](https://choosealicense.com/licenses/mit/)
