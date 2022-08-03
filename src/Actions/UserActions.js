import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Alert } from 'react-native'


export const USER_LOGIN_SUCESS = 'USER_LOGIN_SUCESS';
const userLoginSucess = user => ({
  type: USER_LOGIN_SUCESS,
  user
});

export const USER_LOGOUT = 'USER_LOGOUT';
const userlogout = () => {
  type: USER_LOGOUT,
    null
}

export const tryLogin = ({ email, password }) => dispatch => {

  return (

    signInWithEmailAndPassword(getAuth(), email, password)
      .then(user => {
        const usuario = {
          email: user.email,
          password: user.password
        }
        const action = userLoginSucess(usuario);
        dispatch(action)
        return user;
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          console.log('eror')

          return new Promise((resolve, reject) => {
            Alert.alert(
              'Usuário não encontrado',
              'deseja cadastrar novo usuario ?',
              [{
                text: 'Não',
                onPress: () => resolve()
              }, {
                text: 'Sim',
                onPress: () => {

                  const auth = getAuth();
                  createUserWithEmailAndPassword(auth, email, password)
                    .then(resolve)
                    .catch(reject)
                }


              }],
              { cancelable: false }
            )


          })


        }
        return  Promise.reject(error);


      })

  )


}