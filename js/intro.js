console.log("Introdcution to JavaScript");
fizzBuzz();
console.log(countBs("BabBoon")); // 2
console.log(countBs("BumBleBee")); // 3
console.log(countBs("Basoon")); // 1

function fizzBuzz()
{
    for (var i = 1; i < 101; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
            console.log("FizzBuzz");
        else if (i % 3 == 0)
            console.log("Fizz")
        else if (i % 5 == 0)
            console.log("Buzz")
        else
            console.log(i);
    }
}

function countBs(word)
{
    var count = 0;
    
    for (var i = 0; i < word.length - 1; i++)
    {
        if (word.charAt(i) == "B")
            count++;
    }
    
    return count;
}