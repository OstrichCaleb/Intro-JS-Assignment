console.log("Introdcution to JavaScript");

fizzBuzz();
testCountBs();
testCountChar();

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

/*
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
*/

function countBs(word)
{
    return countChar(word, "B");
}

function countChar(word, letter)
{
    var count = 0;
    
    for (var i = 0; i < word.length - 1; i++)
    {
        if (word.charAt(i) == letter)
            count++;
    }
    
    return count;
}

function testCountBs()
{
    console.log(countBs("Basoon")); // 1
    console.log(countBs("BabBoon")); // 2
    console.log(countBs("BumBleBee")); // 3
}

function testCountChar()
{
    console.log(countChar("Dog", "o")); // 1
    console.log(countChar("BabBoon", "B")); // 2
    console.log(countChar("AAligAtor", "A")); // 3
}