import React from 'react';
import { View, TextInput, StyleSheet, Button,ActivityIndicator,Text,Alert} from 'react-native';
import FormRow from '../Components/FormRow';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
//não ESQUECE o estilo do loading
import {connect} from 'react-redux';
import { trylogin } from '../Actions/Index';



  class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            isLoading:false,
            message:'',
        }
    }
    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAwBjsj1ibR17xSQGKx0y0RvSg68uu7BsQ",
            authDomain: "series-a1e9e.firebaseapp.com",
            projectId: "series-a1e9e",
            storageBucket: "series-a1e9e.appspot.com",
            messagingSenderId: "397511783524",
            appId: "1:397511783524:web:f75a5337f4d2dca1d0db71",
            measurementId: "G-M13BT9DE59"
          };
          
         const teste= initializeApp(firebaseConfig);
      
    }


    onChangedHandle(field, value) {

        this.setState({
            [field]: value
        });

    }
    renderButton(){

        if(this.state.isLoading){
            return <ActivityIndicator/>;
        }
        return(
        <Button style={Styles.button} 
        title="Entrar" 
        onPress={()=>this.tryLogin()}
        />
        );

    }
    renderMessage(){
        const {message}=this.state

        if(!message)return null

        else{
            return(
                <View><Text>{message}</Text></View>

            );
        }
    }
    getMessageByErrorCode(errorCode){
        switch(errorCode){

            case 'auth/wrong-password':
                return 'Senha incorreta';

            case 'auth/user-not-found':
                return 'Email incorreto ou inexistente';
                default:
                    return 'Erro desconhecido';
        }


    }

    tryLogin(){
        this.setState({isLoading:true,message:''})
const {email,password} = this.state;
this.props.trylogin({email,password});



    }
    render() {

        return (
            <View>
                <FormRow first>
                    <TextInput
                        style={Styles.input}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={value => this.onChangedHandle('email', value)}

                    />
                </FormRow>
                <FormRow last>
                    <TextInput
                        style={Styles.input}
                        placeholder="********"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value => this.onChangedHandle('password', value)}



                    />
                </FormRow>
                {this.renderButton()}
                {this.renderMessage()}
              

            </View>

        );

    }


}

const Styles = StyleSheet.create({

    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 5,

    },
    button:{
        backgroundColor:'E50914',
    },
})

export default connect(null,{trylogin})(LoginPage)