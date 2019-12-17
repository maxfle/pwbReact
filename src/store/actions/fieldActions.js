export const createField = (field) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('fields').add({
            ...field, 
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_FIELD', field });
        }).catch((err) => {
            dispatch({ type: 'CREATE_FIELD_ERROR', err })
        })
    }
};

// export const editField = (field) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         // make async call to database
//         const firestore = getFirestore();
//         const profile = getState().firebase.profile;
//         const authorId = getState().firebase.auth.uid;
//         firestore.collection('fields').add({
//             ...field, 
//             authorFirstName: profile.firstName,
//             authorLastName: profile.lastName,
//             authorId: authorId,
//             createdAt: new Date()
//         }).then(()=> {
//             dispatch({ type: 'EDIT_FIELD', field });
//         }).catch((err) => {
//             dispatch({ type: 'CEDIT_FIELD_ERROR', err })
//         })
//     }
// };