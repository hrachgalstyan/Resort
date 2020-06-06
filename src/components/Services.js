import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail} from 'react-icons/fa';
import {FaHiking} from 'react-icons/fa';
import {FaShuttleVan} from 'react-icons/fa';
import {FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaHiking />,
                title: "Endless Hiking",
                info: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaShuttleVan />,
                title: "Free shuttle",
                info: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaBeer />,
                title: "Strongest Beer",
                info: 'Lorem ipsum dolor sit amet consectur adipisicing elit. Magni, corporis!'
            }
        ]
    }
    render() {
        return (
            <section className="services" id="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span style={{fontSize: '70px'}}>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    } )}
                </div>
            </section>
        )
    }
}
