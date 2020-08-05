import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";
import styled from 'styled-components';

const Prog = styled.div`
  height: 5px;
  background: #efb6b2;
  margin-top: 20px;
`;

const ProgressBar = ({file, setFile}) => {

    const {progress, url} = useStorage(file)

    useEffect(() => {
        if(url) {
            setFile(null);
        }
    }, [url, setFile])

    return (
        <Prog style={{width: progress + '%'}}/>
    );
};

export default ProgressBar;
