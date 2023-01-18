var letter = prompt("Enter Your Letter: ");

        letter = letter.toLowerCase();

        switch(letter){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                document.write("Its Vowel");
                break;
            default:
                document.write("Its Consonant");
        }