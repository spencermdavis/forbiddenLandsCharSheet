import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CharacterSheet = () => {
  const [char, setChar] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (snapshot) => {
      // event listener for db value change

      const data = snapshot.val();

      const characterDataArr = [];

      // state setter preparation loops
      for (let propertyName in data) {
        const newCharObj = {
          id: propertyName,
          char: data[propertyName],
        };
        characterDataArr.push(newCharObj);
      }

      // state setter sets state as arrays prepared from database snapshot
      setChar(characterDataArr);
    });
  }, []);
  return <div className="characterSheet"></div>;
};

export default CharacterSheet;
