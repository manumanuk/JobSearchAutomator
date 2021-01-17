import firebase from 'firebase/app'
import 'firebase/database'

class databaseHelper
{
    
    constructor()
    {
    }


    /***Callback Handler. Put user code in here!!***/
    gotData(data)
    {
        let info = data.val();
        let keys = Object.keys(info);

        for(var i = 0; i < keys.length; i++)
        {
            var key = keys[i];
            let name = info[key].name;
            console.log(name);
        }
    }

    /**This function should be called by the user program, but no user code put in here**/
    retrieveInfo()
    {
        const databaseRef = firebase.database().ref('users');
        databaseRef.on('value', this.gotData);
    }

    

    /***DEBUG LOG TO FIREBASE DB***/
    logFirebaseDb()
    {
        console.log(firebase);
    }

    /***SEND DATA TO FIRESTORE***/
    sendToFirestore(data)
    {
        const databaseRef = firebase.database().ref('users');
        databaseRef.push(data);
    }

    


}

export default databaseHelper;

