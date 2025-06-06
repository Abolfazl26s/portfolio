import {GET_SKILLS,SET_LOADING,SKILLS_ERROR} from './types';

// export const getSkills = ()=>{
//     return async (dispatch)=>{
//         setLoading()

//         const res= await fetch('/skills');
//         const data=await res.json();

//         dispatch({
//             type:GET_SKILLS,
//             payLoad:data
//         });
//     }
// }


export const getSkills = ()=> async dispatch =>{

    try {
        setLoading();
        
        const res= await fetch('/skills');
        const data=await res.json();

        dispatch({
          type: GET_SKILLS,
          payLoad: data,
        });
        
    } catch (err) {
        dispatch({
            type:SKILLS_ERROR,
            payLoad: err.response.data
        })
    }
       
}

// set loading to true
export const setLoading = ()=>{
    return{
        type:SET_LOADING
    }
}