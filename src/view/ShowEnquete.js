import './AddEnquete.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ShowEnquete() {

    const [enquetesList, setEnquetesList] = useState([]);
    const PORT = 3002;

    //Buscar todos GET
    useEffect(() => {
        Axios.get(`http://localhost:${PORT}/enquetes`).then((response) => {
            setEnquetesList(response.data);
        })
            .catch(console.log("erro na hora de get"));
    }, []);

    //Deletar um DELETE
    const handleRemoveFields = (codigo) =>{
        Axios.delete(`http://localhost:${PORT}/enquete/${codigo}`).then((response) =>{
            setEnquetesList(enquetesList.filter((val)=>{

                return val.codigo === codigo;
            }));
        });
    };

    //Atualizar um put
    const handleEditFields = (codigo) =>{
        Axios.put(`http://localhost:${PORT}/enquete/${codigo}`).then((response) =>{
            setEnquetesList(enquetesList.filter((val)=>{

                return val.codigo === codigo;
            }));
        });
    };


    return (
        <div className=''>
            {enquetesList?.map((val, key) => {

                return (
                    <div className="card mb-2" key={key}>                                
                        <div className="card-body p-3 p-md-4">
                            <div className='row'>
                                <h5 className="mb-2 pb-1 col-10">{key} - {val.nome}</h5>
                                <Stack className="col-1 col-md-1">
                                    <IconButton aria-label="delete" size="small" onClick={() => handleRemoveFields(val.codigo)}> 
                                        <DeleteIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                                <Stack className="col-1 col-md-1">
                                    <IconButton aria-label="edit" size="small" onClick={() => handleEditFields(val.codigo)}> 
                                        <EditIcon fontSize="small" />
                                    </IconButton>
                                </Stack>
                            </div>
                            <div className="row">
                                <h6>{val.pergunta}:</h6>
                                <p>Inicia: { Date(val.data_inicio)}</p> 
                                <p>Finaliza: {Date(val.data_termino)}</p>

                            </div>
                            <form>
                                <div className="row ms-1">
                                    <div className="form-check form-check-inline col-12">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="resposta1"
                                            value="option1"
                                        />
                                        <div className='row'>
                                            <div className='col-6'>
                                                <label className="form-check-label" htmlFor="option1">Resposta1</label>
                                            </div>
                                            <div className='col-6'>
                                                <label className="form-check-label" htmlFor="resultado1">resultado1</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check form-check-inline col-12">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="resposta2"
                                            value="option2"
                                        />
                                        <div className='row'>
                                            <div className='col-6'>
                                                <label className="form-check-label" htmlFor="option2">Resposta2</label>
                                            </div>
                                            <div className='col-6'>
                                                <label className="form-check-label" htmlFor="resultado2">resultado2</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-check form-check-inline col-12">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="resposta3"
                                            value="option3"
                                        />
                                        <div className='row'>
                                            <div className='col-6'>
                                                <label className="form-check-label" htmlFor="option3">Resposta3</label>
                                            </div>
                                            <div className='col-6 '>
                                                <label className="form-check-label" htmlFor="resultado3">resultado3</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default ShowEnquete;
