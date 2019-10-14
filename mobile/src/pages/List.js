import React, { useState } from "react";
import { View, Text, AsyncStorage } from "react-native";

export default function List() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storedTechs => {
      const techsArray = storedTechs.split(",").map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return <Text>{techs}</Text>;
}
