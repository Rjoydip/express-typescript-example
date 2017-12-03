# express-typescript-example

This is a simple express server using typescript.

Managing large-scale JavaScript projects can be challenging, as you need to guarantee that the pieces fit together. You can use unit tests, types (which JavaScript does not really have), or the two in combination to solve this issue.

This is where TypeScript comes into the picture. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

This article won't go into to details of using the TypeScript language itself, it focuses on how you can build Node.js applications using it. If you are looking for an in-depth TypeScript tutorial, I recommend checking out the TypeScript Gitbook.

### The benefits of using TypeScript

TypeScript is a superset of Javascript. It gives you the following benefits:

optional static typing, with emphasis on optional (it makes porting JavaScript application to TypeScript easy),
as a developer, you can start using ECMAScript features that are not supported by the current V8 engine by using build targets,
use of interfaces,
great tooling with instruments like IntelliSense.

## Getting started with TypeScript & Node

TypeScript is a static type checker for JavaScript. This means that it will check for issues in your codebase using the information available on different types. Example: a String will have a toLowerCase() method, but not a parseInt() method. Of course, the type system of TypeScript can be extended with your own type definitions.

As TypeScript is a superset of JavaScript, you can start using it by literally just renaming your .js files to .ts, so you can introduce TypeScript gradually to your teams.

Note: TypeScript won't do anything in runtime, it works only during compilation time. You will run pure JavaScript files.

### Installation

```sh
$ npm install
```