import React, { useState } from 'react';
import EmotionForm from './Components/TextField';
import './Emotions.css'
function EmotionsPage() {
  const [forms, setForms] = useState([]);

  const addForm = () => {
    setForms([...forms, { id: forms.length }]);
  };

  const removeForm = (formId) => {
    setForms(forms.filter((form) => form.id !== formId));
  };

  return (
    <div>
      <h2 style={{color:'green'}}>Emotions Page</h2>
      {forms.map((form) => (
        <EmotionForm key={form.id} formId={form.id} handleRemove={removeForm} />
      ))}
      <button className="toggole" type="button" onClick={addForm}>+ Add Emotion Form</button>
    </div>
  );
}
export default EmotionsPage;