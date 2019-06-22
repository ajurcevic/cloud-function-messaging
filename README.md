# Firebase Cloud Function Example

👉 Introduction Cloud Functions: https://firebase.google.com/docs/functions

👉 Introduction Cloud Messaging: https://firebase.google.com/docs/cloud-messaging

The project uses Cloud Functions to perform Cloud Messaging with the help of Realtime Database. All Firebase.

This Cloud Function example monitors a directory in the Firebase Realtime Database for newly created records.
When the record is created the Cloud Function triggers the Cloud Messaging process and sends the message to the Topic, any device subscribed to that topic will receive a message.

We are using the latest firebase-admin and function versions.

# Realtime Database

What the database structure looks like:
![realtime-database](/assets/realtime-database.png)

## Subscibers devices
> iOS / Android / Web, et al.
> They need to subscribe to the same name you set the topic name.
```sh
$ const topic = "custom-topic-name";
```

## Installation 
> Add Firebase Functions to your project
```sh
$ firebase init functions
```

## Deploy to Firebase
> Deploy the Cloud Function
```sh
firebase deploy --only functions
```
