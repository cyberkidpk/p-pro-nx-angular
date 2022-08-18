

<p> #P-PRO-NG-NX project 
  is just for demo and guidance purpose, below are the prerequisites before running code</p>
  
*Step 1*
1. Install the latest version of **Node Js**
2. Install yarn **npm install -g yarn**

*Step 2*
1. Fork or clone the repository
2. Navigate to **p-pro-ng-nx** folder
3. **yarn install**
4. **npx nx serve p-pro-ng-nx-host** to run the host application

==========================================================================================================

# PProNgNx

# CREATTING A WORKSPACE FROM THE VERY START
*npx create-nx-workspace@latest*

You then receive the following prompts in your command line:

    Workspace name (e.g., org name)    **p-pro-ng-nx**

    What to create in the new workspace **angular**

    Application name                    **p-pro-ng-nx-app1**

    Default stylesheet format          **SCSS**


**Serve, test, build the application**

    *npx nx serve p-pro-ng-nx-app1*

    *npx nx test p-pro-ng-nx-app1*

    *npx nx build p-pro-ng-nx-app1*


**Creating angular or other application/project after workspace generation**

    *npx nx generate @nrwl/angular:app p-pro-ng-nx-new-app*


**Create An angular Component **

    *npx nx g @nrwl/angular:component --name=myComponent --project=p-pro-ng-nx-new-app*  

#Handle multiple Projects/Apps
***nx run command***  executes a target on a single project.

For convenience, you can also run **npx nx [target] [project]** which is an alias to **npx nx run [project]:[target]**.
     
     *nx run-many --target=build --projects=app1,app2*
     
     *nx run-many --target=test --all*
     
**Runs all projects that have a test target, use this sparingly.**

The **nx affected command** isolates the set projects that may have changed in behavior and runs a target across them.

This is more efficient than running all projects every time.

     *npx nx affected --target=build*
   
# PRO TIP - Generating first workspace and app with desired parameters #

    *npx create-nx-workspace --preset=angular --name=p-pro-ng-nx --appName=p-pro-ng-nx-host --cli=angular --interactive=true --packageManager=yarn*


##################################################################################################################################################################

##################################################################################################################################################################

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/react-tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@p-pro-ng-nx/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.
