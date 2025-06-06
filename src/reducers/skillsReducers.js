// import {GET_SKILLS,SET_LOADING,SKILLS_ERROR} from '../actions/types';

// const initialState={
//     skills:null,
//     current:null,
//     loading:false,
//     error:null
// }


// export default (state = initialState ,action) => {
//     switch(action.type){
//         case GET_SKILLS:
//             return {
//                 ...state,
//                 skills:action.payLoad,
//                 loading:false
//             }
//         case SET_LOADING :
//             return{...state,loading:true};

//         case SKILLS_ERROR :
//             console.error(action.payLoad);
//             return {...state,error:action.payLoad}    
//         default:
//             return state
//     }
// }