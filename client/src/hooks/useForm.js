// write your custom hook here to control your checkout form
import React,{useState} from 'react'


export const useForm = (values, setValues) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
   



    return [ showSuccessMessage, setShowSuccessMessage,]
}