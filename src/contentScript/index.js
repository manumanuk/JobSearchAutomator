/*global chrome*/
import Firebase from '../firebase';
import databaseHelper from '../databaseFunctions';

var dbhelper = new databaseHelper();
var currState = document.getElementsByTagName('h2')[0]
var currStateString = "";
var prevStateString ="";
var recorded = false;
var wordBank = ["first name", "last name", "full name", "name", "city", "country", 
    "province", "postal", "state", "address", "phone number", "phone extension", "university", 
    "degree", "program", "gpa", "grade", "from", "to", "skill", "linkedin", "github", 
    "job", "work", "role", "location", "company"]

var numberOfStatusUpdates = 0;
var firebaseClass = new Firebase();

let info ={}
let keys ={}
let data ={}

function stateUpdate(){
  
    currState = document.getElementsByTagName('h2')[0]
    if(currState)
    {
     currStateString = currState.innerHTML;
    
     if(prevStateString != currStateString)
     {
       //console.log(prevStateString);
       prevStateString = currStateString;
       //console.log(currStateString);
       //console.log("Prev State String Updated");
       
       info = dbhelper.retrieveInfo()
       //var tester = dbhelper.retrieveInfo()
       keys = Object.keys(info);
       data = keys[0]
       setTimeout(function() {
          getPageHTML()
          console.log("I delayed")
        }, 2000);
    }
  }
  }

function getPageHTML() {
  {

    var label = document.getElementsByTagName('label')
    console.log(label.length)

    for(var i=0; i<label.length; i++){
      console.log(label[i].innerHTML)
      var field = label[i].innerHTML.toLowerCase()

      for(var j=0; j<wordBank.length; j++){

        if(field.includes(wordBank[j])){
          var ID = label[i].htmlFor
          var form = document.getElementById(ID)
          //change the value to the database value of whatever is being stored
          switch(j){
            case 0:
              form.value = info[data].name.firstName
              break;
            case 1:
              form.value = info[data].name.lastName
              break;
            case 2:
              form.value = info[data].name.firstName + info[data].name.lastName
              break;
            case 4:
              form.value = info[data].location.city
              break;
            case 5:
              form.value = info[data].location.country
              break;
            case 6:
            case 8:
              form.value = info[data].location.state
              break;
            case 7:
              form.value = info[data].location.postalCode
              break;
            case 9:
              form.value = info[data].location.address
              break;
            case 10:
              form.value = info[data].phoneNumber
              break;
            case 11:
              form.value = "+1"
              break;
            case 12:
              form.value = info[data].education.organization
              break;
            case 13:
              form.value = info[data].education.degree
            case 14:
              form.value = info[data].education.program
              break;
            case 15:
            case 16:
              form.value = info[data].education.grade
              break;
            case 20:
              form.value = "www.myLinkedIn.com"
              break;
            case 22:
            case 23:
              form.value = "Cashier"
              break;
            case 24:
              form.value = "managed money"
              break;
            case 25:
              form.value = "Toronto"
              break;
            case 26:
              form.value = "Walmart"
            }
        }
      }
    }
  }
}
getPageHTML();
document.addEventListener('DOMNodeInserted', stateUpdate);

/*****FIREBASE SETUP*****/
function testDB()
{
  var test =
      {
        name: currStateString,
        number: numberOfStatusUpdates + 1
      }

      dbhelper.sendToFirestore(test);
}

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse){
    console.log(message)
  }
)


