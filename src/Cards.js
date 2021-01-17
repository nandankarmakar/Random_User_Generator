import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card,CardBody,CardText,CardTitle,Button} from 'reactstrap'
import {FaEnvelope,FaMapMarkedAlt,FaPhone} from 'react-icons/fa'

const Cards=({details})=>{
    return(
       <div className='d-flex justify-content-center align-items-center'>
        <Card className="card">
            <CardBody className="text-center">
                <img height="160" width="160" className="img-rounded circle img-thumbnail border-danger" style={{borderRadius:'50%'}} alt=''
                  src={details.picture?.large}
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText>
                    <FaMapMarkedAlt/>
                    {details.location?.city}
                    <p className="pb-0"><FaPhone/>{details.phone}</p>
                    <p><FaEnvelope/>{details.email}</p>
                </CardText>
            </CardBody>
        </Card>
       </div>
    )
}
export default Cards;