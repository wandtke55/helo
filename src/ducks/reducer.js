const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const USER_UPDATE = 'USER_UPDATE'

export default function reducer(state = initialState, action){
    switch(action.type){

        case USER_UPDATE: {
            return Object.assign({}, state, action.payload)
        }

        default: {
            return state
        }
    }
}

export function userUpdate(id, username, profilePic){
   return{
    type: USER_UPDATE,
    payload: {
        id: id,
        username: username,
        profilePic: profilePic
    }
   }
}