import React from "react";

const SheetTemplate = (props) => {
  return (
    <div className="sheetTemplate">
      <section className="basicInfo">
        <ul className="attributes">
          <li>Strength: {props.strength}</li>
          <li>Strength: {props.agility}</li>
          <li>Strength: {props.wits}</li>
          <li>Strength: {props.empathy}</li>
        </ul>
        <ul className="personalInfo">
          <li>Name: {props.name}</li>
          <li>Kin: {props.kin}</li>
          <li>Profession: {props.profession}</li>
          <li>Pride: {props.pride}</li>
          <li>Dark Secret: {props.darkSecret}</li>
          <li>Age: {props.age}</li>
        </ul>
        <ul className="talents">
          {props.talents.map((talent, index) => {
            return (
              <li key={index}>
                {talent.name}: {talent.level}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default SheetTemplate;
