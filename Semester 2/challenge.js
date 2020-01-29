function removeVowels(str){
    var vowels = "aeiou";
    var noVowelString = "";
    for(var i=0; i<str.length; i++){
        //Get the current letter from str
        str.charAt(i)

        if(
            str,indexOf(vowels) == -1){
                return str
    }
}
//check if current letter is in vowels
 //if not in vowels, then copy to noVowelString

  message = "Hello, how are you" ;
  console.log(noVowels(message))}


    /*function noVowels(message){
    var vowels = 'aeiou';
    var string = "";
    for(var i=0; i<message.length; i++){
       var currentletter = message.charAt(i)
        if(vowels.indexOf(currentletter)<0)
                string += currentletter;
    }
    return string
}
//check if current letter is in vowels
 //if not in vowels, then copy to noVowelString

  message = "Hello, how are you?";
  console.log(noVowels(message));
  */
 
function everyOther(message){
    var string = "";

    for(var i=0; i<message.length; i+=4){
        var fourthLetter = message.charAt(i);
        string += fourthLetter;
    }
        return string
  }

  message = "Hello, how are you?"
  console.log(everyOther(message));