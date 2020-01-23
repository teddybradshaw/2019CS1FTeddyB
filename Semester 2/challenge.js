/*function novowels{
    var noVowelString = "";
    var vowels = 'aeiou';
    for{ var i=message.length-1, i>=0,i++{
        noVowelString += message.indexOf()

    }

    }

    message = "Hello, how are you?"
    noVowels(message) = "Hll, hw r y?";

}
*/

function removeVowels(str){
    var vowels = "aieuo";
    var strArr = str.toLowerCase().split("");
    var newArr = strArr.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
    var string = "";
    newArr.forEach(function(letter){
        string += letter;
    });
    return string;
}
