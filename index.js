const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let elPassword = document.getElementById("password-1");
let elPassword2 = document.getElementById("password-2");
let length = 15;

function generateRandomPassword() {
    let password = "";
    let password2 = "";
    password += characters[Math.floor(Math.random() * characters.length)]
    password2 += characters[Math.floor(Math.random() * characters.length)]
    
    while(length > password.length && length > password2.length){
        password += characters[Math.floor(Math.random() * characters.length)]
        password2 += characters[Math.floor(Math.random() * characters.length)]
    }
    elPassword.value = password;
    elPassword2.value = password2;
}

