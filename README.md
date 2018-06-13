# pmpro-webpack-scaffold

Introduction to Webpack and node modules for scaffolding a Javascript development environment. You will need node.js, found here https://nodejs.org/en/, to be installed. NPM comes with node.js, but if you'd like to try YARN, you can set that up here: https://yarnpkg.com/lang/en/docs/install//  If you're on a Mac, you can use Homebrew to install with:

> `brew install yarn -g`

The -g is the flag that signals to install globally.

Since we are creating our own server, it doesn't really matter where you clone this repository to on your hard drive.

## Setup and installation

We're using Yarn to set things up, but you can also use NPM, if you don't wanna try new things. ;-(

1. Fork repository to your Github account.
1. Clone to your local computer via Github Desktop or terminal command `git clone https://github.com/pbrocks/pmpro-webpack-scaffold.git`. This will add the minimal files needed.
1. Open `index.html` in a browser. You should be able to right click on the file and select `Open in Browser`
1. You should see raw html and text explaining that you need to run `Yarn`.
1. Notice this is not what you see here <a href="http://localhost:8080">http://localhost:8080</a> in your browser.
1. In a terminal window, navigate to this folder. On a Mac, you can open the terminal, type `cd ` from wherever you are. Make sure you have the space after 'cd'. Then grab this repo's folder and drag it into the terminal window. You should then see the path to this repo in your terminal prompt. Press Enter.
1. From within the folder, run `yarn install`.
1. When node has finished installing the modules, run `yarn start` to begin the server.
1. Open <a href="http://localhost:8080">http://localhost:8080</a> in your browser.
