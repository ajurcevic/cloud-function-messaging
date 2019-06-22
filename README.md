# Firebase Cloud Function Example

👉 Introduction Cloud Functions: https://firebase.google.com/docs/functions

👉 Introduction Cloud Messaging: https://firebase.google.com/docs/cloud-messaging

TL;DR: The project uses Cloud Functions to perform Cloud Messaging with the help of Realtime Database. All Firebase.


This Cloud Function example monitors the Firebase Realtime Database for new records.
The Cloud Function then triggers the Cloud Messaging process and sends the message to the Topic, any device subscribed to that Topic will receive the message.

When the message is successful, it will record the timestamp for that record back into the database.

Project is using the latest firebase-admin and function versions at the time of writing.

## Realtime Database
> What your database structure should look like:

![realtime-database](/assets/realtime-database.png)

## Subsciber devices
> iOS / Android / Web, et al.

> Devices need to subscribe to the same name as the topic set on 'line 16' to receive messages.
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
