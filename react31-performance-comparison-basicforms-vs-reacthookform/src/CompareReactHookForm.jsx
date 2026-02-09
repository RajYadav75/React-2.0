import React, {useEffect, useState} from 'react';

function CompareReactHookForm() {
    const [formData, setFormData] = useState({name: '', email: ''});
    useEffect(() => {
        console.log('Basi');
    })
    return (
        <div>

        </div>
    );
}

export default CompareReactHookForm;