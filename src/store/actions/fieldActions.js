export const createField = (field) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('fields').add({
            ...field, 
            authorFirstName: 'Max',
            authorLastName: 'Fleischman',
            authorId: 12345,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_FIELD', field });
        }).catch((err) => {
            dispatch({ type: 'CREATE_FIELD_ERROR', err })
        })
    }
};