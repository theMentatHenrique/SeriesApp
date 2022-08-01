 import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'


export const USER_LOGIN_SUCESS='USER_LOGIN_SUCESS';
const userLoginSucess=user=>({
    type:USER_LOGIN_SUCESS,
    user  
});

export const USER_LOGOUT='USER_LOGOUT';
const userlogout=()=>{
    type:USER_LOGOUT,
    null  
}

export const trylogin=({email,password})=> dispatch=>{
           
    
    return 
       
            signInWithEmailAndPassword( getAuth(),email,password)
            .then(user=>{

                const action=userLoginSucess(user);
                dispatch(action)
            })
    
           // .catch(error=>{
             //   if(error.code==='auth/user-not-found'){
    //
      //              Alert.alert(
        //                'Usuário não encontrado',
          //              'deseja cadastrar novo usuario ?',
            //            [{
              //              text:'Não',
                //            onPress:()=>{}
                  //      },{
                    //        text:'Sim',
                      //      onPress:()=>{
    //
      //                          const auth=getAuth();
        //                        createUserWithEmailAndPassword(auth,email,password)
          //                      .then(userLoginSucess)
            //                    .catch(userLoginError)
              //              }
    //
    //
      //                  }],
        //                {cancelable:false}
          //          )
            //    }
    //
      //          userLoginError;
            
        //    })
          //  .then(()=>this.setState({isLoading:false}))
}