console.log("javascript is beautiful");

console.log(`hello!!,
    Good Morning`);

// ✅ Uses template literals (backticks ``) to allow:
// Multi-line strings
// No need for \n for new lines
// Indentation is preserved

let a = 24;
console.log(`age is ${a}`);
//✅ ${a} is a placeholder (expression interpolation) in a template string. It inserts the value of a (24).

//📘 Summary: Template Literals (``)
// | Feature                  | Description                           |
// | ------------------------ | ------------------------------------- |
// | Declared using           | Backticks \`\`                        |
// | Multi-line strings       | ✅ Yes                                 |
// | Expression interpolation | ✅ Use `${...}`                        |
// | Embedded expressions     | ✅ Can use `${2+2}`, `${func()}`, etc. |
