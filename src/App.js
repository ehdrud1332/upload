import React, {useState} from 'react';
import styled from 'styled-components';
import Title from './Components/Title';
import UploadForm from './Components/uploadForm'
import ImageGrid from "./Components/ImageGrid";
import Modal from "./Components/Modal";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

function App() {

    const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Container>
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
        {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
    </Container>
  );
}

export default App;
