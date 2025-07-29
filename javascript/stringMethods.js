//🔍 1. Searching / Finding
// | Method          | Description                     | Example                                           |
// | --------------- | ------------------------------- | ------------------------------------------------- |
// | `includes()`    | Checks if substring exists      | `"hello".includes("ell") → true`                  |
// | `indexOf()`     | First index of substring        | `"hello".indexOf("l") → 2`                        |
// | `lastIndexOf()` | Last index of substring         | `"hello".lastIndexOf("l") → 3`                    |
// | `startsWith()`  | Checks if string starts with    | `"hello".startsWith("he") → true`                 |
// | `endsWith()`    | Checks if string ends with      | `"hello".endsWith("lo") → true`                   |
// | `search()`      | Searches using regex            | `"cat".search(/a/) → 1`                           |
// | `match()`       | Returns array on regex match    | `"abc".match(/b/) → ['b']`                        |
// | `matchAll()`    | Returns iterator of all matches | `Array.from("a1b2".matchAll(/\d/g)) → ['1', '2']` |

//✂️ 2. Extracting / Slicing
// | Method          | Description          | Example                           |
// | --------------- | -------------------- | --------------------------------- |
// | `charAt()`      | Character at index   | `"hello".charAt(1) → 'e'`         |
// | `charCodeAt()`  | UTF-16 code at index | `"A".charCodeAt(0) → 65`          |
// | `codePointAt()` | Unicode code point   | `"😊".codePointAt(0) → 128522`    |
// | `slice()`       | Extract substring    | `"hello".slice(1, 4) → 'ell'`     |
// | `substring()`   | Similar to slice     | `"hello".substring(1, 4) → 'ell'` |
// | `at()`          | Index from start/end | `"hello".at(-1) → 'o'`            |

// 🔤 3. Modifying / Transforming
// | Method                | Description                | Example                                           |
// | --------------------- | -------------------------- | ------------------------------------------------- |
// | `toUpperCase()`       | All caps                   | `"abc".toUpperCase() → 'ABC'`                     |
// | `toLowerCase()`       | All lowercase              | `"ABC".toLowerCase() → 'abc'`                     |
// | `toLocaleUpperCase()` | Locale-aware uppercase     | `"istanbul".toLocaleUpperCase('tr') → 'İSTANBUL'` |
// | `toLocaleLowerCase()` | Locale-aware lowercase     | `"İSTANBUL".toLocaleLowerCase('tr') → 'istanbul'` |
// | `normalize()`         | Unicode normalization      | `"é".normalize() → 'é'`                           |
// | `toWellFormed()`      | Ensures well-formed string | `"😵‍💫".toWellFormed()`                          |

// 📌 4. Trimming
// | Method        | Description                    | Example                     |
// | ------------- | ------------------------------ | --------------------------- |
// | `trim()`      | Removes whitespace (both ends) | `"  hi  ".trim() → 'hi'`    |
// | `trimStart()` | Trim start only                | `"  hi".trimStart() → 'hi'` |
// | `trimEnd()`   | Trim end only                  | `"hi  ".trimEnd() → 'hi'`   |

// 🧱 5. Creating / Concatenating
// | Method       | Description     | Example                        |
// | ------------ | --------------- | ------------------------------ |
// | `concat()`   | Joins strings   | `"a".concat("b") → 'ab'`       |
// | `repeat()`   | Repeats string  | `"ha".repeat(3) → 'hahaha'`    |
// | `padStart()` | Pads from start | `"5".padStart(3, "0") → '005'` |
// | `padEnd()`   | Pads from end   | `"5".padEnd(3, "0") → '500'`   |

// 🔁 6. Replacing
// | Method         | Description          | Example                              |
// | -------------- | -------------------- | ------------------------------------ |
// | `replace()`    | Replaces first match | `"foo".replace("o", "a") → 'fao'`    |
// | `replaceAll()` | Replaces all matches | `"foo".replaceAll("o", "a") → 'faa'` |

// 🔎 7. Comparison & Info
// | Method            | Description                      | Example                       |
// | ----------------- | -------------------------------- | ----------------------------- |
// | `localeCompare()` | Compares two strings             | `"a".localeCompare("b") → -1` |
// | `isWellFormed()`  | Checks if string is valid UTF-16 | `"😊".isWellFormed() → true`  |

// 🧾 8. Conversion
// | Method       | Description             | Example                    |
// | ------------ | ----------------------- | -------------------------- |
// | `toString()` | Converts to string      | `(123).toString() → '123'` |
// | `valueOf()`  | Returns primitive value | `"abc".valueOf() → 'abc'`  |
