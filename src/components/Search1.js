import React from 'react'
import {Navbar, Form, Button, FormControl} from 'react-bootstrap'
import AddMovie from './AddMovie'

const Search1=({search, setsearch,})=> {
    return (
        <div>
            <Navbar className="nav-b" bg="#6e7985" variant="light">
    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"
                        onChange={(e) => setsearch(e.target.value)} />
                    <Button variant="outline-info">Search</Button>
    </Form>
            </Navbar>
            

            
        </div>
    )
}

export default Search1
