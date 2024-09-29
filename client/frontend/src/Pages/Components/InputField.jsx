import { useState } from "react";
import './styles/InputField.css'

export default function AddDynamicInputFields() {
  const [inputs, setInputs] = useState([{ restriction: ""}]);

  const handleAddInput = () => {
    setInputs([...inputs, { restriction: ""}]);
  };

  const handleChange = (event, index) => {
    let { name, value } = event.target;
    let onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...inputs];
    newArray.splice(index, 1);
    setInputs(newArray);
  };


  return (
    <div className="container">
      {inputs.map((item, index) => (
        <div className="input_container" key={index}>
         
         {inputs.length > 1 && (
            <button className = "deleting" onClick={() => handleDeleteInput(index)}>-</button>
          )}
          <input placeholder="Allergy/Restrictions" className="input"
            name="restriction"
            type="text"
            value={item.restriction}
            onChange={(event) => handleChange(event, index)}
          />
          {index === inputs.length - 1 && (
              <button className="adding" onClick={() => handleAddInput()}><span className="butt">+</span></button>
            )}
        </div>
        
      ))}
    </div>
  );
}