var myState = document.getElementsByTagName('h2')[0]

function stateUpdate(){
  // if(!myState){
  //   myState = document.getElementsByTagName('h2')[0]
  // }

  // else{
  //   var myStateNew= document.getElementsByTagName('h2')[0]

  //   console.log("myStateNew is ")
  //   console.log(myStateNew.innerHTML)
  //   console.log("myState is ")
  //   console.log(myState.innerHTML)

  //   if(myStateNew.innerHTML!=myState.innerHTML){
  //     getPageHTML()
  //     console.log("hiya")
  //     myState=myStateNew
  //   }
  // }

  //New attempt below

  // var myStateNew= document.getElementsByTagName('h2')[0]
  // console.log(myStateNew)
  // if(myState && myStateNew && myStateNew.innerHTML!=myState.innerHTML)
  // {
  //   getPageHTML()
  //   console.log("hiya")
  // }
}

getPageHTML();
function getPageHTML() {
  {
    var y = document.getElementsByTagName('label')
    //console.log(y[0].value)
    var x = document.getElementsByTagName('input')
    //x[0].value = "Weatherman"
    //console.log(x[0].value)
    console.log("hi Aryan")
  }
}

document.addEventListener('DOMNodeInserted', stateUpdate);