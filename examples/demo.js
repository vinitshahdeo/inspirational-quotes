const quote = require('inspirational-quotes');
const data = require('../data/data.json')

getRandomNumber=(min,max)=>{
  let step1 = max-min+1
  let step2 = Math.random()*step1
  return (Math.floor(step2)+min)
}

createBucket=()=>{
  let bucket = [];
  for (let i = 0;i<data.length;i++)
  {
    bucket.push(i)
  } 
  return bucket
}
let bucket = createBucket()

getRandomQuote=()=>{
  if(bucket.length == 0)
  {
    return("We have Showed you all the Quotes")
  }
  let randomIndex = getRandomNumber(0,bucket.length-1)
  let randomNumber = bucket[randomIndex]
  bucket.splice(randomIndex,1)
  return (data[randomNumber].text)
}

// as the length of data is 324 currently and we are looping till 500 that means if quote is requested more than 324 then it will show we have showed you all the quotes as the bucket becomes empty
// for(var i = 0;i<500;i++)
// {
//   console.log(getRandomQuote())
// }


console.log(getRandomQuote()) //random quotes

console.log(quote.getQuote()) //quotes serially