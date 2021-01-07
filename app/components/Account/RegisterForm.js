import React, {useState} from "react";
import { StyleSheet, View, Text } from "react-native"
import { Input, Icon, Button } from "react-native-elements";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState();
    const [formData, setformData] = useState(defaultFormValue());

    const onSubmit = () => {
        console.log(formData);
    };

    const onChange =(e, type) =>{
        // console.log(e.nativeEvent.text);
        // setformData({[type]: e.nativeEvent.text})
        setformData({ ...formData, [type]: e.nativeEvent.text })
    }

    return(
        <View style={styles.formContainer}>
            <Input
            placeholder="Correo electronico"
            containerStyle={styles.inputForm}
            onChange={e => onChange(e, "email")}
            rightIcon={
                <Icon
                type="material-community"
                name="at"
                iconStyle={styles.iconRight}
                />
            } />
            <Input
            placeholder="Contrasena"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showPassword ? false : true}
            onChange={e => onChange(e, "password")}
            rightIcon={
                <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline" }
                iconStyle={styles.iconRight}
                onPress={() => setShowPassword(!showPassword)}
                />
            }
            />
            <Input
            placeholder="Repetir contrasena"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showRepeatPassword ? false : true}
            onChange={e => onChange(e, "repeatPassword")}
            rightIcon={
                <Icon
                type="material-community"
                name={showPassword ? "eye-off-outline" : "eye-outline" }
                iconStyle={styles.iconRight}
                onPress={() => setShowRepeatPassword(!showRepeatPassword)} />
            }
            />
            <Button 
            title="Unirse"
            containerStyle={styles.btnContainerRegister}
            buttonStyle={styles.btnRegister}
            onPress={onSubmit}/>
        </View>
    );
}

function defaultFormValue(){
    return{
        email: "",
        password: "",
        repeatPassword: "",

    };
}

const styles= StyleSheet.create({
    formContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
    },

    inputForm: {
        width: "100%",
        marginTop: 20,
    },

    btnContainerRegister: {
        marginTop: 20,
        width: "95%"
    },

    btnRegister: {
        backgroundColor: "#00a680"
    },

    iconRight:{
        color: "#c1c1c1",

    },
});
