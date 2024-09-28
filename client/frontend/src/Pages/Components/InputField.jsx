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
          <input
            name="restriction"
            type="text"
            value={item.restriction}
            onChange={(event) => handleChange(event, index)}
          />

          {inputs.length > 1 && (
            <button onClick={() => handleDeleteInput(index)}>Delete</button>
          )}
          {index === inputs.length - 1 && (
            <button onClick={() => handleAddInput()}>Add</button>
          )}
        </div>
      ))}
    </div>
  );
}