import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const login_background = require("../../assets/img/login_background.png");

import {
  PageDefault,
  ImageBackground,
  ContainerOpacity,
} from "../../components/Views";
import Logo from "../../components/Logo";
import { BackButton, Button, FlatButton } from "../../components/Buttons";
import Input from "../../components/Input";
import { loginMethod } from "../../data/Firebase";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <PageDefault>
      <ImageBackground source={login_background}>
        <Logo size={90} />
        <ContainerOpacity>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
            name={"ios-arrow-back"}
          />
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e);
            }}
            placeholder={"Digite seu E-mail"}
            isPassword={false}
            type="email"
          />

          <Input
            value={pass}
            onChange={(e) => {
              setPass(e);
            }}
            placeholder={"Digite sua Senha"}
            isPassword={true}
            type="password"
          />

          <Button
            onPress={() => {
              loginMethod(navigation, email, pass)
            }}
            color={"#885500"}
            text="Entrar"
          />

          <FlatButton
            onPress={() => {
              navigation.navigate("Logon");
            }}
            cor={"#885500"}
            text="Criar um novo usuário"
          />
        </ContainerOpacity>
      </ImageBackground>
    </PageDefault>
  );
};

export default Login;
