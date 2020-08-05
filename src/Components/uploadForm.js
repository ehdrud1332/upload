import React, {useState} from 'react';
import styled from 'styled-components';

const OutPut = styled.output`
  height: 60px;
  font-size: 0.8rem;
`;

const Error = styled.text`
  color: #ff4a4a;
`;


const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {

        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError("");
        } else {
            setFile(null);
            setError("Plz select an image file png or jpg");
        }
    }

    return (
        <form>
            <label>
                <input type='file' onchange={handleChange}/>
                <span>+</span>
            </label>
            <OutPut>
                {error && <Error>{error}</Error>}
                {file && <div>{file.name}</div>}
            </OutPut>
        </form>
    );
};

export default UploadForm;
