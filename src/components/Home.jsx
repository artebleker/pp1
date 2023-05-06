import React from 'react'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container  className='m-5 p-5 text-center' fluid style={{width:"90vw"}}>
        <h1 className='fs-1'>EQUIPO 3</h1>
        <ul className='list-group list-group-flush'>
           <li className='list-group-item'>Anabela Soledad Barboza</li> 
           <li className='list-group-item'>Julian Bleker</li> 
           <li className='list-group-item'>Jorge Omar Lopez</li> 
           <li className='list-group-item'>Veronica Pelazas</li> 
           <li className='list-group-item'>Florencia Veron</li> 
           <li className='list-group-item'>Brian Jose Villalba</li> 
        </ul>
      </Container>
  )
}

export default Home