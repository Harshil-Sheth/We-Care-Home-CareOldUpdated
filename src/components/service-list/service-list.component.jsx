import React, { Component } from 'react';
import Card from '../service-card/service-card.component';
import "../service-card/service-card.styles.css";
import "./service-list.styles.css"


class ServiceList extends Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                title: 'Furnishing',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTdzvmYy9e5BCt1S3OyE9o287dDyHXA_lww&usqp=CAU',
                shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                id: '1',
                linkUrl: 'Furnishing'
            },
            {
                title: 'Beautifying',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7639x3M_O1N5An2Y6CNEdWnwL6HLzUX2fzw&usqp=CAU',
                shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                id: '2',
                linkUrl: ''
            },
            {
                title: 'Cleaning',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvnY15Nf4OM82CycatyuVX9zb8gqpNs3LAw&usqp=CAU',
                shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                id: '3',
                linkUrl: ''
            },
            {
                title: 'Flooring',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPjyQEMrs6mtBfLbcWUCBfZR7V7Y-0UprzQ&usqp=CAU',
                shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                id: '4',
                linkUrl: '',
                size: 'large'
            },
            {
                title: 'Painting',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ccIHqSWQdc6lSoW4bixXyAmdAbU_xw3YXg&usqp=CAU',
                shortDesc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                id: '5',
                linkUrl: '',
                size: 'large'
            }]
        }
    }
    render() {
        return (
            <div className='cards'>
            <div id='services' className="container-fluid d-flex cardlist">
                <div className="row nthcard">
                {this.state.sections.map(({ id, ...otherSectionProps}) => (
                <div key={id}  className="col-md-4 d-flex cardlist">
                <Card  key={id} {...otherSectionProps}/>
                </div> 
            ))}
                </div>
            </div>
            </div>
        );
}
}


export default ServiceList;