//this keyword
//refers to an object that is executing the current piece of code
//if the fun being referenced is regular fun "this" references the global object
//if the fun that is being referenced is a method in an object, "this" refernece the object itself

//node.js in non-strict mode
// console.log(this);
// 1.console.log(this)->{}

// function test(){console.log(this)}test()
// 2.fun->global Object

// let obj={name:'steve' ,
// myFun:function(){
//console.log(this)}}
//obj.myFun()
// 3.fun inside obj->object itself

// let obj={name:'steve' ,
// myFun:function(){
//function myFun2(){
//console.log(this)}
//myFun2}}
//obj.myFun()
// 4.fun inside fun inside obj->global object

//node.js in strict mode
// 1.console.log(this)->{}
// 2.fun->undefined
// 3.fun inside obj->object itself
// 4.fun inside fun inside obj->undefined

//browser in non-strict mode
// 1.console.log(this)->window object
// 2.fun->window object
// 3.fun inside obj->object itself
// 4.fun inside fun inside obj->window object

//browser in strict mode
// 1.console.log(this)->window object
// 2.fun->undefined
// 3.fun inside obj->object itself
// 4.fun inside fun inside obj->undefined
