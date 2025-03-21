# Functions

Functions are a way how to reuse blocks of code. So we don't have to write it again.

Or a way to organize code for easier manipulation.

Note: If the purpose of function is reusability it should be either simple or universal.

## Execution

Functions are executed by **invoking** (**calling**) them. That is done by using function **name** and adding `()` (brackets) after it. If function have declared parameters, arguments for them are placed inside of `()` (brackets).

Example: Calling function `log` on **console** and providing it with one string argument with value `"Still here!"`.

    console.log("Still here!");

In case that **variable** contains function which is common then execution is using same pattern as above. We will use variable name followed by `()` (brackets).

Note: If you invoke function by just calling it's name, without adding `()` (brackets) after it it won't be called and it will return information that it is function or in case that code is known then with full code for that function (for example in browser).

Note: Calling nonexistent function will throw error. It will produce different types of error based on if function which was called belongs to an object or not. Calling variable which is not function will throw `TypeError: notFunction`.

## Creating function

Functions can be created in 3 ways. Either via **declaration** or as an **anonymous function** or as an **arrow function**.

### Function declaration

Function created through declaration are also called named functions.

Note: Functions constructed in this way, can be called before they are defined, thanks to **hoisting**.

Standard syntax is:

    function functionName() {
        //code to execute
    }

    functionName();

After keyword `function` which defines that function will be declared. Comes `functionName` name under which the function will be available. Then follows `()` which may contain parameters (example bellow). Then between `{}` follows code block which will be executed. This function will return `undefined` when called.

Syntax with return statement (value `0`):

    function functionName() {
        //code to execute

        return 0;
    }

    functionName();

Only difference against example above is the `return` statement. In this case function will return `0` not `undefined`.

Syntax with parameters:

    function functionName(variableName) {
        //code to execute

        return 0;
    }

    functionName(0);

Only difference against example above is the provided parameter `variableName` between `()`. Function can have more then one parameter. If function is called without providing arguments execution will happen and all parameters will be supplied with `undefined` values.

Syntax with **default** parameters:

    function functionName(variableName = 0) {
        //code to execute

        return 0;
    }

    functionName();

Only difference against example above is that we **assign value** to parameter `variableName`. In case that function is called without it or if provided argument is of type `undefined` it will by supplied by our value.

Other option to get parameters in function is via **rest parameter syntax**. This one allows function to accept undefined number of arguments and access them as an array. Only one **rest parameter syntax** can be used in definition. It can be combined with other params, but it has to be **last** param.

Syntax with **rest** parameters:

    function functionName(variableName, ...restOfVariables) {
        //code to execute

        return 0;
    }

    functionName(20, 30, 40);

### Function expression (Anonymous functions)

Other option how to construct functions is via function expression sometimes called anonymous function.

This can be used when we don't **need** or **want** to provide function to whole scope.

Standard syntax is:

    const myFunction = function () {
        //code to execute
    }

    myFunction();

Main difference here in comparison to **function declaration** is that function does start with `function` keyword but with assignment to **variable** without it it would not make sense to create function as it could not be called (except for special variant bellow). After assignment follows `function` keyword, then follows `()` which may contain parameters and then between `{}` follows code block which will be executed. Same as for **function declaration** if function does not contain `return` keyword it will return `undefined`.

Note: Functional expressions **can be named**. But name is available only inside function itself. So it can be used to call itself. For example calculation of _factorial_.

#### Turning function declaration to function expression

Example of upgrading function made via **function declaration** to **function expression**, on logging each member of collection. From:

    // script execution

    // function will log provided variable
    function justLog(string) {
        return console.log(string);
    }

    const euCountriesArray = [
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Poland",
        "Netherlands",
        "Belgium",
        "Greece",
    ];
    console.log(euCountriesArray);

    euCountriesArray.forEach(justLog);

To:

    // script execution

    const euCountriesArray = [
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Poland",
        "Netherlands",
        "Belgium",
        "Greece",
    ];
    console.log(euCountriesArray);

    euCountriesArray.forEach(function (value) {
        console.log(value);
    });

Function `justLog` from from part was removed and place from which was called got **function expression** `function (value) { console.log(value); }` which does same exact operation as did `justLog` function. Main advantage is that there is no one time use function polluting scope and code is more readable.

#### Immediately Invoked Function Expression (IIFE)

This is special type of function expression which is immediately invoked (hence the name).

Example:

    //script execution

    (function () {
        console.log("IIFE");
    })();

Note: This was mostly used in past when block scopes and models did not exist yet. Now this is mostly obsolete as same thing can be done more cleanly but still can be found in older code.

### Arrow functions

Other option how to construct functions is via arrow function syntax which is closer to function expression but can't be used interchangeably.

Standard syntax is:

    const myFunction = () => {
        //code to execute
    };

    myFunction();

Function is written as `()` brackets which may hold parameters followed by `=>` (an arrow) and then between `{}` follows code block which will be executed. If no `return` statement is provided it will return `undefined`.

Also it can be written as:

    const myFunction2 = a => a * a;

    console.log(myFunction2(7));

In this case there are no `()` brackets as there is only one parameter and there are is no body (`{}`) as provided expression is `return`.

Arrow function can't be used as a method. There is a problem with `this` binding (on this later).

#### Turning function declaration to arrow function

Example of upgrading function made via **function declaration** to **arrow function**, on logging each member of collection. From:

    // script execution

    // function will log provided variable
    function justLog(string) {
        return console.log(string);
    }

    const euCountriesArray = [
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Poland",
        "Netherlands",
        "Belgium",
        "Greece",
    ];
    console.log(euCountriesArray);

    euCountriesArray.forEach(justLog);

To:

    // script execution

    const euCountriesArray = [
        "Germany",
        "France",
        "Italy",
        "Spain",
        "Poland",
        "Netherlands",
        "Belgium",
        "Greece",
    ];
    console.log(euCountriesArray);

    euCountriesArray.forEach((value) => {
        console.log(value);
    });

Function `justLog` from from part was removed and place from which was called got **arrow function** `(value) => { console.log(value); }` which does same exact operation as did `justLog` function. Main advantage is that there is no one time use function polluting scope and code is more readable.

## Parameters vs arguments

**Parameters** and **arguments** have slightly different meaning but are mostly used interchangeably. **Parameters** are variables which are declared in function definition. **Arguments** are variables which are provided to function when it is invoked.

Note: Even professional programmers are using these two most of the time interchangeably.

### Function vs Method

**Functions** defined inside of **objects** are called **methods**.

Note: Even professional programmers are using these two most of the time interchangeably.

## Function callback

Function callback is situation when function is expecting to get another function which it will call. This is precisely what we used in examples for `.map()` or `.filter()` on `array`.

For reason that we don't get any errors on function execution we need to confirm that provided variable is a function.

Standard construction with protection is:

    //script execution

    function func(callMeFunc) {
        if (!callMeFunc) {
            console.error("Function was undefined");
            return;
        }

        if (typeof callMeFunc !== "function") {
            console.error("Not a function");
            return;
        }

        callMeFunc();
    }

    func();
    func(10);
    func(startCar); //this is function defined above

In the example above we are first checking if provided value is not `undefined`. This construction is used often even in non function checks as it is universal and it is working on principle of equity in which `undefined` **equals** to `false` (Javascript specific). Other check is for provided variable being function so that we will not execute something which is not function.

## Passing arguments

There is difference in how arguments are passed to functions and what happens to them. Difference is if the argument data type is an **object** or **not**.

### Pass by value

When arguments which are **not objects** are passed to function they are **passed by value**. That means that their value will be copied to function and all modification to that value will not be propagated outside.

Example:

    //script execution

    // function which tries to modify provided value
    function modifyArgument(x) {
        x = 5;

        console.log("X inside:", x); // 5
    }

    let x = 0;

    console.log("X before:", x); // 0

    modifyArgument(x);

    console.log("X after:", x); // 0

### Pass by sharing

When arguments which are **objects** are passed to function they are **passed by sharing**. This means that reference to that object will be copied to function. Object it self can be modified and modification will be available after function execution ends. Assigning value to argument itself will not be carried outside of function.

Example:

    //script execution

    // function will modify provided object
    function modifyObject(obj) {
        obj.name = "John";

        console.log("Object inside modify:", obj); // { name: "John" }
    }

    // function will try to replace provided object
    function replaceObject(obj) {
        obj = {
            name: "Frank",
        };

        console.log("Object inside replace:", obj); // { name: "Frank" }
    }

    let person = {
        name: "Ema",
    };

    console.log("Object before:", person); // { name: "Ema" }

    modifyObject(person);

    console.log("Object after modify:", person); // { name: "John" }

    replaceObject(person);

    console.log("Object after replace:", person); // { name: "John" }

### Pass by reference

Javascript does not support **passing by reference**.

Passing by reference mean that assigning value to argument itself would be carried outside of function.
