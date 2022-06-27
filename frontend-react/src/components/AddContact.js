import axios from 'axios';
import React from 'react';
import { Map, Draggable } from "pigeon-maps";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
const AddContact = () => {
    const [anchor, setAnchor] = useState([33.8938, 35.5018]);
    const [center, setCenter] = useState([33.8938, 35.5018])
    const [zoom, setZoom] = useState(11)
    const navigate = useNavigate();
    const [firstName, setfirstname] = useState("");
    const [LastName, setlastname] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [status, setstatus] = useState("")
    const [email, setemail] = useState("")
    function addCont() {
        let location = {
            longitude: anchor[0],
            latitude: anchor[1]
        }
        let data = {
            firstName: firstName,
            lastName: LastName,
            phoneNumber: phoneNumber,
            status: status,
            email: email,
            user: localStorage.getItem("userId"),
            location: location
        }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:3000/api/contact/addContact',
            data: data
        }).then(function (response) {
            if (response.data) {
                window.location.href = '/contact'
            }
        })
    }

    return (

        <div>

            <div>
                <button className='btn' onClick={(e) => {
                    navigate('/contact');
                }}>Back</button>
            </div>

            <form className='add-form' onSubmit={onsubmit}>
                <div className='form-control'>
                    <label>First name</label>
                    <input
                        type='text'
                        placeholder='Enter first name'
                        onChange={(e) => {
                            setfirstname(e.currentTarget.value)
                        }

                        }

                    ></input>
                </div>
                <div className='form-control'>
                    <label>Last name</label>
                    <input
                        type='text'
                        placeholder='Enter last name'
                        onChange={(e) => {
                            setlastname(e.currentTarget.value)
                        }

                        }
                    ></input>
                </div>
                <div className='form-control'>
                    <label>Phone number</label>
                    <input
                        type='text'
                        placeholder='Enter phone number' onChange={(e) => {
                            setphoneNumber(e.currentTarget.value)
                        }

                        }
                    ></input>
                </div>
                <div className='form-control'>
                    <label>Status</label>
                    <input
                        type='text'
                        placeholder='Enter status'
                        onChange={(e) => {
                            setstatus(e.currentTarget.value)
                        }

                        }></input>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='text'
                        placeholder='Enter email'
                        onChange={(e) => {
                            setemail(e.currentTarget.value)
                        }

                        }></input>
                    <div className='map'>
                        <label>Choose a location(scroll up/down to zoom in/out)</label>
                        <Map height={300} center={center}
                            zoom={zoom}
                            onBoundsChanged={({ center, zoom }) => {
                                setCenter(center)
                                setZoom(zoom)
                            }} >
                            <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                                <img src={require("../assets/pointer.png")} width={100} height={80} alt="pointer" />
                            </Draggable>
                        </Map>
                    </div>


                </div>
                <button className='btn btn-block btn-add' type='button' onClick={addCont}>+</button>
            </form>
        </div>
    )
}

export default AddContact