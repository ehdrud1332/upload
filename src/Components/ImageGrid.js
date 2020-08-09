import React from 'react';
import styled from 'styled-components';
import useFireStore from "../hooks/useFireStore";
import {motion} from 'framer-motion';

const Grid = styled.div`
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
`;

const ImageGrid = ({setSelectedImg}) => {

    const {docs} = useFireStore('images')

    return (
        <Grid>
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id}
                            layout
                            whileHover={{ opacity: 1}}s
                            onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img
                        src={doc.url}
                        alt="uploaded pic"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            ))}
        </Grid>
    );
};

export default ImageGrid;





