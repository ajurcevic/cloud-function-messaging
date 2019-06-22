/*
#   Written by: Adrian Jurcevic
#       create a cloud function that is triggered from new records 
#       in the notification/ tree directory in Firebase realtime database
#   using: firebase-admin 8.2.0 & firebase-functions 3.0.1
#   10/06/2019
*/

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//change the region: https://firebase.google.com/docs/functions/locations
const region = "asia-northeast1";
//change the topic name that your mobile/web devices will be subscribed to for messages 
const topic = "custom-topic-name";

/*
onWrite(change, context)    = triggers when data is created, updated, or deleted in the Realtime Database.
onCreate(change, context)   = triggers when new data is created in the Realtime Database.
onUpdate(snapshot, context) = triggers when data is updated in the Realtime Database.
onDelete(snapshot, context) = triggers when data is deleted from the Realtime Database.

Example below we are watching for any update to the database performed in the /notifications/ location.
*/

exports.sendNotifications = functions
    .region(region)
    .database
    .ref('notifications/{notiUid}')
    .onCreate((snap, context) => {

        const msg = snap.val();

        //uncomment below lines to see values in the Function logs
        //console.log('id', context.params.notiUid);
        //console.log('message', msg);

        let payload = {
            notification: {
                title: msg.title,
                body: msg.message,
                sound: "default",
                badge: "1"
            }
        };

        return admin.messaging().sendToTopic(topic, payload);
    });
