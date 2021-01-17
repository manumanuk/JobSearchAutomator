import Firebase from '../firebase';
import databaseHelper from '../databaseFunctions';

var dbhelper = new databaseHelper();

var currState = document.getElementsByTagName('h2')[0]

var currStateString = "";
var prevStateString = "";
//Boolean recorded = false;

var numberOfStatusUpdates = 0;


function stateUpdate(){
  currState = document.getElementsByTagName('h2')[0]
  
  if(currState)
  {
    currStateString = currState.innerHTML;
    
    if(prevStateString != currStateString)
    {
      //console.log(prevStateString);
      prevStateString = currStateString;
      numberOfStatusUpdates++;
      //console.log(currStateString);
      //console.log("Prev State String Updated");
      /***CALL FUNCTIONS TO DO STUFF***/
      testDB();

    }
  }
}

getPageHTML();
function getPageHTML() {
  {
    var y = document.getElementsByTagName('label')
    //console.log(y[0].value)
    var x = document.getElementsByTagName('input')
    //x[0].value = "Weatherman"
    //console.log(x[0].value)
    console.log("Called Page HTML")
  }
}

document.addEventListener('DOMNodeInserted', stateUpdate);


/*****FIREBASE SETUP*****/
var firebaseClass = new Firebase();

function testDB()
{
  var test =
      {
        name: currStateString,
        number: numberOfStatusUpdates + 1
      }

      dbhelper.sendToFirestore(test);
}