var headingList =['h1', 'h2', 'h3']
var currState = 
[document.getElementsByTagName('h1')[0], 
document.getElementsByTagName('h2')[0], 
document.getElementsByTagName('h3')[0]]

var currStateString = ["", "", ""];
var prevStateString = ["", "", ""];
var recorded = false;
var changed=false

function stateUpdate(){
  for(var heading=0; heading<headingList.length && !changed; heading++){
    currState[heading] = document.getElementsByTagName(headingList[heading])[0]
    if(currState[heading])
    {
     currStateString[heading] = currState[heading].innerHTML;
    
     if(prevStateString[heading] != currStateString[heading])
     {
       //console.log(prevStateString);
       prevStateString[heading] = currStateString[heading];
       //console.log(currStateString);
       //console.log("Prev State String Updated");
       setTimeout(function() {
          getPageHTML()
          console.log("I delayed")
          changed = true
        }, 2000);
    }
  }
  }
  changed = false
}

getPageHTML();
function getPageHTML() {
  {
    var wordBank = ["first name", "last name", "full name", "name", "city", "country", 
    "province", "postal", "state", "address", "phone number", "phone eformtension", "university", 
    "degree", "program", "gpa", "grade", "from", "to", "skill", "linkedin", "github"]

    var label = document.getElementsByTagName('label')
    console.log(label.length)

    for(var i=0; i<label.length; i++){
      console.log(label[i].innerHTML)
      var field = label[i].innerHTML.toLowerCase()

      for(var j=0; j<wordBank.length; j++){

        if(field.includes(wordBank[j])){
          var ID = label[i].htmlFor
          var form = document.getElementById(ID)
          form.value = "Aryan"
        }
      }
    }
  }
}

document.addEventListener('DOMNodeInserted', stateUpdate);