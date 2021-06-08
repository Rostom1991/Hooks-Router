import React , {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { MovieData } from './MovieData';



const AddMovie = ({moviesData, setMovies}) => {
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
   
    const [title, settitle] = useState("")
    const [url, seturl] = useState("")
    const [rate,setrate] = useState(0)
    const [descript, setdescript] = useState("")
    
    const addmovie = () => {
        const newmovie = {imgURL:url, Name:title, Rate:rate, Description:descript }
        setMovies([...moviesData, newmovie])
        handleClose()
    
    }
    
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  
        <Form.Group className="mb-3" >
            <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Title" onChange={(e) => { settitle(e.target.value) }} />
                  </Form.Group>

                <Form.Group className="mb-3" >
            <Form.Label>URL</Form.Label>
            <Form.Control type="text" placeholder="imgURl" onChange={(e) => { seturl(e.target.value) }}/>
                  </Form.Group>

                          <Form.Group className="mb-3" >
            <Form.Label>Rate</Form.Label>
            <Form.Control type="text" placeholder="Rate" onChange={(e) => { setrate (e.target.value) }}/>
                  </Form.Group>

                          <Form.Group className="mb-3" >
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" onChange={(e) => { setdescript(e.target.value) }}/>
                  </Form.Group>
                  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addmovie}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie