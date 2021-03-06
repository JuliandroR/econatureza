import React, { useState } from "react";
import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Input from "../Input";

export const DataPicker = (props) => {
  const style = StyleSheet.create({
    input: {
      width: PixelRatio.getPixelSizeForLayoutSize(130),
      height: PixelRatio.getPixelSizeForLayoutSize(25),
      backgroundColor: "#f7f7f7",
      borderRadius: 50,
      borderColor: "rgba(136, 85, 0, 0.5)",
      borderStyle: "solid",
      borderWidth: 1,
      marginBottom: 20,
      paddingLeft: 25,
      color: "rgba(136, 85, 0, 1)",
      justifyContent: "center",
    },
  });

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [viewDate, setViewDate] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    const day = `${currentDate.getDate()}`.padStart(2, 0);
    const month = `${currentDate.getMonth() + 1}`.padStart(2, 0);
    const year = `${currentDate.getFullYear()}`.padStart(2, 0);

    props.onChange(`${day}/${month}/${year}`);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
          {/* <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="rgba(136, 85, 0, 0.5)"
            value={props.value}
            style={style.input}
            editable={false}
          /> */}
          <View style={style.input}>
            <Text>{props.value}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
