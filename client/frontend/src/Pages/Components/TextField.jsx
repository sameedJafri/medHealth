import React from 'react';
import './styles/TextField.css'

function EmotionForm({ formId, handleRemove }) {
  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h4>Emotion Form {formId + 1}</h4>
      
      {/* Date input */}
      <label>
        Date:
        <input className="date" type="date" name={`date-${formId}`} />
      </label>
      <br />
      
      {/* Diary entry */}
      <label>
        Diary Entry:{' '}
        <textarea className="diary" name={`diary-${formId}`} placeholder="Write about your day or emotions" rows="4" cols="50"></textarea>
      </label>
      <br />
      
      {/* Medicine checkbox */}
      <label>
        Took Medicine:
        <input type="checkbox" name={`medicine-${formId}`} />
      </label>
      <br />
      
      {/* Remove button */}
      <button className="remove" type="button" onClick={() => handleRemove(formId)}>Remove Form</button>
    </div>
  );
}

export default EmotionForm;