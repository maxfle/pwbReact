const initState = {
    projects: [
        {id: '1', nameOfField: 'clack', address: 'clackamas high school', description: 'freshman campus'},
        {id: '2', nameOfField: 'Lair Hill park', address: 'Lair Hill Park', description: 'Handball court across the street from Duniway park/Under armour headquarters'},
        {id: '3', nameOfField: 'forest hills', address: '1070 SW Portola Ave, Portland, OR 97225', description: 'short wall in-between basketball courts'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;