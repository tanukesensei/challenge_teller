const oldJson = require('./13.3.7.json');
const newJson = require('./13.4.0.json');

const oldJsonMethods = oldJson.map((method) => {
let result= [];
for (let i = 0; i < oldJson.length; i++) {
 result[i] = oldJson[i].request.method;
}
return result;
})

const newJsonMethods = newJson.map((method) => {
let result= [];
for (let i = 0; i < newJson.length; i++) {
 result[i] = newJson[i].request.method;
}
return result;
})

if(oldJsonMethods.length > newJsonMethods.length || oldJsonMethods.length < newJsonMethods.length) {
console.log('There is a difference in the list of file methods');
console.log("Old json methods: ", oldJsonMethods[0])
console.log("New json methods: ", newJsonMethods[0])
} else {
console.log('List of methods: no differences found');
}

const oldJsonStatusCode = oldJson.map((statusCode) => {
let result= [];
for (let i = 0; i < oldJson.length; i++) {
 result[i] = oldJson[i].response.status_code;
}
return result;
})

const newJsonStatusCode = newJson.map((statusCode) => {
let result= [];
for (let i = 0; i < newJson.length; i++) {
 result[i] = newJson[i].response.status_code;
}
return result;
})

function diffStatusCode(oldJsonStatusCode, newJsonStatusCode) {
 const diff = [];
 
 for (let i = 0; i < oldJsonStatusCode.length; i++) {
   if (oldJsonStatusCode[i] !== newJsonStatusCode[i]) {
     diff.push(i);
   }
 }
 
 if (diff.length > 0){
   return true 
 } else {
   return false
 } 
}

const hasDiffStatus = diffStatusCode(oldJsonStatusCode[0], newJsonStatusCode[0])

if(hasDiffStatus){
console.log('Status list has been changed')
console.log('oldJsonStatusCode', oldJsonStatusCode[0])
console.log('newJsonStatusCode', newJsonStatusCode[0])
} else {
console.log('Status list has not changed')
}


// const oldJsonRequestHeaders = oldJson.map((requestHeaders) => {
//   let result= [];
//   for (let i = 0; i < oldJson.length; i++) {
//    result[i] = oldJson[i].request.headers[i].name;
//   }
//   return result;
//   })
//  console.log(oldJsonRequestHeaders[0])

// const newJsonRequestHeaders = newJson.map((requestHeaders) => {
//   let result= [];
//   for (let i = 0; i < newJson.length; i++) {
//    result[i] = newJson[i].request.headers[i].name;
//   }
//   return result;
//   })
//  console.log(newJsonRequestHeaders[0])

//  function diffRequestHeaders(oldJsonRequestHeaders, newJsonRequestHeaders) {

//    const headersNotChange = [];
//    const headersHasChanged = [];

//    const diff = [];
 
//    for (let i = 0; i < oldJsonRequestHeaders.length; i++) {

//      diff = newJsonRequestHeaders.find(('Host'))
   
//      if (oldJsonRequestHeaders[i] !== newJsonRequestHeaders[i]) {
//        diff.push(i);
//      }
//    }

 // return diff
 // if (diff.length > 0){
 //   return true 
 // } else {
 //   return false
 // }
//  }
// console.log(diffRequestHeaders(oldJsonRequestHeaders[0], newJsonRequestHeaders[0]))

// // console.log(oldJson[0].request.headers[0].value)