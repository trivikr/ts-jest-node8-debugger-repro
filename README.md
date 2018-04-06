# ts-jest-node8-debugger-repro

Repro repo for [debugger stopping at incorrect line numbers](https://github.com/kulshekhar/ts-jest/issues/309) in source files with [ts-jest@22.0.4](https://github.com/kulshekhar/ts-jest/tree/v22.0.4)

Steps to reproduce:

* `git checkout jest-22-test` to move to private branch
* `yarn` or `npm install` to install dependencies
* `npm run test` to build and run tests, notice that coverage is 100%
* Open the project in VSCode, go to Debug and run "Debug Tests"
* Notice that the build task runs and debugger stops two lines after **debugger;** statement in SystemUndertest.ts, and returnValue is not populated under Watch section

  ![Screen recording](./screenRecording.gif)

Tested with:

* VSCode Version 1.15.1
* Node v8.4.0
* vscode-jest 2.3.0
