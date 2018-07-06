# Authapp

This Angular App is part of Northern Kentucky University's URStem research project "Better Cloud Practices", which consists in applying authentication methods.

The first scenario is enabling authentication by using a third party application, in our case "Auth0" to handle the authentication process.

The second scenario is meant to allow an application held in an AWS EC2 instance perform authentication of a user by using AWS-managed Active Directory credentials.

The third scenario is meant to allow an application held in an AWS EC2 instance perform authentication of a user by using on-premise Active Directory credentials.

For the three scenarios, this App will be hosted on an AWS instance, and used as the medium to achieve authentication.


## First, Clone the repository into your local machine.
git clone git@github.com:jasalazar/authapp.git

## Second, Build
Using the CLI, go to the App's folder and run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Third,
## Run Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you encounter any problem, please contact me at salazarusj1@nku.edu

# authapp
