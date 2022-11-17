var form = document.getElementById('form')
var name = document.getElementById('name')
var pref = document.getElementById('pref')
var error = document.getElementById('error')

form.addEventListener('submit', function(event){
 event.preventDefault()
 document.getElementByID('text').innerHTML = name.innerText
 flag = 0

 let message = []
 /*
 messages.push('Hi my name is')
 error.innerText = messages.join(', ')
 console.log("form")
 var soFar
 jQuery.get("/Result/names", function(textString) {
     soFar = textString
     let lines = []
     lines = textString.split("\n")
     var half
     for (let i = 0; i < lines.length; i++) {
         half = lines[i].split(" ")
         var clearhalf = CryptoJS.AES.decrypt(half[0], "Frohe Weihnacht");
         if (clearhalf === name) {
             flag = 1
         }
     }   
 });

 if (flag == 1) {
     message = "Du hast bereits abgestimmt!!!"
 } else {
     const fs = require('fs')
     var data = soFar.concat(CryptoJS.AES.encrypt(name, "Frohe Weihnacht").concat(" ").concat(CryptoJS.AES.encrypt(pref, "Frohe Weihnacht").concat("\n")))
     fs.writeFile('/Result/names', data, (err) => {
     // In case of a error throw err.
     if (err) throw err;
 })
     message = "Okay deine Präferenz wurde abgespeichert!"
 }


 
 document.getElementByID('text').innerHTML = message
 //messages.push("Did it work?")*/
})
