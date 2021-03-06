import React, { Component } from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import Title from '../Title';
import Text from '../Text';


const EventsStyled = styled.div`
    p:nth-child(2){
        padding-bottom: 0;
    }

`


class Events extends Component {
    state = {
        events: [],
        page: []
    }
    componentDidMount(){
        this.fetchEvents();
        this.fetchPage('events');
    }

    fetchPage = async (slug) => {
        const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/pages?slug=${slug}]`);
        const page = await res.json();
        this.setState({
            page: page[0]
        })
    }

    fetchEvents = async () => {
        const res = await fetch(`http://${process.env.HOST}/wp-json/wp/v2/event`);
        let events = await res.json();
        events = this.changeDates(events);
        this.setState({
            events: events
        })
    }

    changeDates = (events) => {
        events.map(event => {
            const date = new Date(event.date);
            const options = {
                month: 'long',
                day: 'numeric'
            };
            event.date = date.toLocaleDateString('en-EN', options)
            return event;
        })
        return events
        
    }


    render() {
        return (
            
            <EventsStyled>
                <Title text="Events schedule" />
                <Text text="Welcome to read about our events. Here you can easely follow our journey to make a difference and also be a part of it!" />
                {this.state.events.map((event, i) => {
                    return (
                        <EventCard  
                            key={i}
                            date={event.date}
                            name={event.name}
                            text={event.description}
                            image={event.image}
                            adress={event.adress}
                            city={event.city}
                            />
                        
                    );
                })}
            </EventsStyled>
                
        );
    }
}

export default Events;