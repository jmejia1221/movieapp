import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuid } from "uuid";

// Components
import Input from "../../components/UI/Input";
import Textarea from "../../components/UI/Textarea";
import Button from "../../components/UI/Button";

// CSS
import styles from './MovieCreation.module.scss';

const MovieCreation = () => {
    const formRef = useRef(null);
    const [base64, setBase64] = useState('');
    const history = useHistory();
    const [textareaValue, setTextareaValue] = useState('');
    const [formInput, setFormInput] = useState({
        title: true,
        release: true,
        file: true
    });

    const textareaHandler = (e) => {
        setTextareaValue(e.target.value);
    }

    const saveMovieHandler = (e) => {
        e.preventDefault();
        const data = new FormData(formRef.current);
        const newMovie = {};

        for (const entry of data.entries()) {
            if (entry[1] === 'file') newMovie = {...newMovie, file: base64};
            newMovie[entry[0]] = entry[1];
            newMovie["id"] = uuid();
            newMovie["description"] = textareaValue;
        }

        if (!newMovie["release"] || !newMovie["title"] || !Object.keys(newMovie["file"]).length){
            setFormInput({
                title: !!newMovie["title"],
                release: !!newMovie["release"],
                file: !!Object.keys(newMovie["file"]).length
            });
            return;
        }

        const getMovies = localStorage.getItem('movies');
        const movies = JSON.parse(getMovies) || [];

        if (!movies) movies = [newMovie]
        if (movies) movies.push(newMovie)
        localStorage.setItem('movies', JSON.stringify(movies));
        history.push('/home');
    };

    const getBase64 = file => {
        return new Promise(resolve => {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        });
    };
    
    const handleFileInputChange = e => {
        let file = e.target.files[0];
        getBase64(file)
            .then(result => {
                file["base64"] = result;
                setBase64(result)
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>Add Movie</h2>
                <Button onClick={saveMovieHandler}>Save</Button>
            </header>
            <section className={styles.formContent}>
                <form ref={formRef} onSubmit={saveMovieHandler} id="description">
                    <Input name="title" placeholder="Movie title" type="text" isValid={formInput["title"]} />
                    <Input name="release" type="date" isValid={formInput["release"]} />
                    <Input name="file" type="file" onChange={handleFileInputChange} isValid={formInput["file"]} />
                    <Textarea name="description" onchange={textareaHandler} placeholder="Add description" />
                </form>
            </section>
        </div>
    );
};

export default MovieCreation;