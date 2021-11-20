import { PhotoCamera } from '@mui/icons-material';
import { IconButton, Input, TextField } from '@mui/material';
import { logDOM } from '@testing-library/dom';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    // Prev method
    // const handleName = e =>{
    //     setName(e.target.value)
    // }

    const handleSubmit = e => {

        console.log("yo");
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        // fetch('http://localhost:5000/doctors', {
        fetch('https://intense-gorge-28690.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    setSuccess("doctor added successfully, congo")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h3>add doctor here</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard"
                ></TextField><br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    required
                    onChange={e => setEmail(e.target.value)}
                    variant="standard"
                ></TextField><br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}

                />
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    type="submit"
                >
                    <PhotoCamera />
                </IconButton>
            </form>
            {success && <p style={{color:'green'}}>{success}</p> }
        </div>
    );
};

export default AddDoctor;