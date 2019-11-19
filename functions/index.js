const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Max!");
});

const createNotification = notification => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notificiation added', doc));
}

exports.fieldCreated = functions.firestore
    .document('fields/{fieldId}')
    .onCreate(doc => {
        const field = doc.data();
        const notification = {
            content: 'Added a new field',
            user: `${field.authorFirstName} ${field.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);
})