<<<<<<< HEAD
## JavaScript Arrays

- Array stores **multiple data items**.
- `typeof []` → returns `'object'`.
  - To check if a value is an array:
  ```js
  Array.isArray([...])
  ```
- Arrays allow operations using **various methods and properties**.
- Indexing starts from `0`.
- Arrays provide an **ordered collection** of data.

---

### Example: Creating an Array

```js
var arr = [12, "hi", true, 12.5];
console.log(arr); // [12, "hi", true, 12.5]
```

### Accessing an Element

```js
console.log(arr[1]); // "hi"
```

### Replacing a Value

```js
arr[1] = "hello";
console.log(arr); // [12, "hello", true, 12.5]
```

### Getting Array Length

```js
console.log("length", arr.length); // 4
```
=======
*Array stores multiple data items
    *typeof [] (Array) --> object , then how will you find thw value is array ar not ? Array.isArray([...])

    *we can perform operation by using different methods and properties
    *index starting from 0

*Array provides an ordered collection of data

```var arr = [12, "hi", true, 12.5];
console.log(arr);```

## accessing an Element
```console.log(arr[1]);```

##replace
```arr[1] = "hello";
console.log(arr);```

##length
```console.log("lenghth", arr.length);```
>>>>>>> 88109d3f7eeeebef6b663d3b604c8f7f13d8e14d
