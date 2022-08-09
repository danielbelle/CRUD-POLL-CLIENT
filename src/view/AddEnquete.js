import './AddEnquete.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function AddEnquete() {

    const PORT = 3002;
    const [nome, setNome] = useState('');
    const [data_inicio, setDataInicio] = useState('');
    const [data_termino, setDataFinal] = useState('');
    const [pergunta, setPergunta] = useState('');
    


    const [inputFields, setInputFields] = useState([
        { respEnquete: '' },
        { respEnquete: '' },
        { respEnquete: '' },

    ]);


    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    //Create
    const handleSubmit = () => {
        Axios.post(`http://localhost:${PORT}/enquete`, {
            nome: nome,
            data_inicio: data_inicio,
            data_termino: data_termino,
            pergunta: pergunta,
        }).then(()=>
            console.log("Adicionado ao banco de dados")
        );

    };

    const handleAddFields = () =>{
        setInputFields([...inputFields, { respEnquete: '' }]);
    };

    const handleRemoveFields = (index) =>{
        const values = [...inputFields];
        if (inputFields.length > 3){
            values.splice(index,1);
            setInputFields(values); 
        }
    };

    return (
        <div className='intro pt-2 pb-5'>
            <div className="ps-4">
                <Link to="/" className='btn btn-light btn-lg'>Todas Enquetes</Link>
            </div>
            <section className="pt-4">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-9 col-xl-8">
                                <div className="card">
                                    <div className="card-body p-3 p-md-3">
                                        <h3 className="mb-2 pb-1">Adicionar Enquete</h3>
                                        <form action="">
                                            <div className="row">
                                                <div className="col-12 col-md-6">
                                                    <div className="row">
                                                        <h6>Informações Enquete:</h6>
                                                        <div className="col-md-12 mb-4 mt-2">

                                                            <div className="form-floating">
                                                                <input type="text" id="firstName" className="form-control" onChange={(event) => {
                                                                    setNome(event.target.value);
                                                                    }}/>
                                                                <label className="form-label" htmlFor="firstName">Nome da enquete</label>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 mt-2">

                                                            <div className="form-floating datepicker">
                                                                <input type="date" className="form-control" id="data_inicio" onChange={(event) => {
                                                                    setDataInicio(event.target.value);
                                                                    }}/>
                                                                <label htmlFor="data_inicio" className="form-label">Data de início</label>
                                                            </div>

                                                        </div>
                                                        <div className="col-md-6 mb-4 mt-2">

                                                            <div className="form-floating datepicker">
                                                                <input type="date" className="form-control" id="data_termino" onChange={(event) => {
                                                                    setDataFinal(event.target.value);
                                                                    }}/>
                                                                <label htmlFor="data_termino" className="form-label">Data de término</label>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12 mb-4 mt-2">

                                                            <div className="form-floating">
                                                                <input type="text" id="perguntaEnquete" className="form-control" onChange={(event) => {
                                                                    setPergunta(event.target.value);
                                                                    }}/>
                                                                <label className="form-label" htmlFor="perguntaEnquete">Pergunta da enquete:</label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <h6>Respostas:</h6>

                                                    <p className="frase-resposta">Três respostas por padrão. Ou adicione mais clicando no botão "nova resposta".
                                                    </p>
                                                    <div className="row">

                                                        {inputFields.map((inputField, index) => (
                                                            <div key={index} className="row mb-2">
                                                                <div className="col-10 col-md-10">

                                                                    <div className="form-floating">
                                                                        <input type="text" id="respostaEnquete" className="form-control" name="respEnquete" value={inputField.respEnquete} onChange={event => handleChangeInput(index,event)}/>
                                                                        <label className="form-label" htmlFor="respostaEnquete">Resposta da enquete:</label>

                                                                    </div>
                                                                    
                                                                </div>
                                                                <Stack className="col-1 col-md-1">
                                                                    <IconButton aria-label="delete" size="small" onClick={() => handleRemoveFields(index)}> 
                                                                        <DeleteIcon fontSize="small" />
                                                                    </IconButton>
                                                                </Stack>
                                                                
                                                            </div>


                                                        ))}


                                                    </div>

                                                    <div className='row'>
                                                        <div className="col-6">
                                                            <div className="mt-4">
                                                                <input className="btn btn-warning btn-lg" type="button" defaultValue="Nova Resposta" onClick={() => handleAddFields()}/>
                                                            </div>
                                                        </div>
                                                        <div className="col-4 offset-2">
                                                            <div className="mt-4">
                                                                <input className="btn btn-warning btn-lg" type="submit" value="Salvar" onClick={handleSubmit} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddEnquete;
