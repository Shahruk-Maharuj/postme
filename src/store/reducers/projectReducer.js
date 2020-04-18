const initState = {
    projects: [
        {id: '1', title: 'How to learn react?', content: 'if you want to learn react then follow this steps'},
        {id: '2', title: 'How to learn anguler?', content: 'if you want to learn react then follow this steps'},
        {id: '3', title: 'How to learn app dev?', content: 'if you want to learn react then follow this steps'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERORR':
            console.log('create project error', action.err);
            return state;
        default: 
            return state;
    }
}

export default projectReducer;