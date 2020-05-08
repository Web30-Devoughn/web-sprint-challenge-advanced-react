// write your custom hook here to control your checkout form
import React,{useState} from 'react'


export const useForm = initialValue => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = updatedValues => {
        setValues(updatedValues);
      };


    return [ showSuccessMessage, setShowSuccessMessage]
}