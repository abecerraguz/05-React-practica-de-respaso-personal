import React from 'react';
import './App.css';
import Card from './components/Card'
import { generate as id } from 'shortid'

function App() {

const cards = [
    {
    id: id(),
    title: "Card 1",
    img: '/assets/wolf.jpg',
    author: 'Dorian',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
    id: id(),
    title: "Card 2",
    img: '/assets/wolf.jpg',
    author: 'Dorian',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    },
    {
    id: id(),
    title: "Card 3",
    img: '/assets/wolf.jpg',
    author: 'Dorian',
    date: new Date().toLocaleDateString(),
    tags: ['animal', 'wolf', 'snow'],
    views: 23,
    description: "A beautiful wolf in snow. Lorem ipsum dolor sit amet consectetur adipiscing elit integer, dictumst nibh sociosqu torquent tempor blandit neque habitasse, sodales mi nisl praesent rhoncus urna pharetra. Leo integer sem volutpat feugiat fusce luctus, arcu laoreet urna mauris cum mus platea, pulvinar magna mattis auctor penatibus. Laoreet cubilia duis luctus vivamus nunc pulvinar ligula porta vehicula hendrerit convallis eleifend sed, auctor proin dignissim integer vel tristique rutrum rhoncus purus ultricies curabitur."
    }
]


  return(
      
    <div className="cards">
      {
        cards.map(card=>{
        return (
          <Card
              key={id()}
              info={
                {
                  id:card.id,
                  title:card.title,
                  img:card.img,
                  author:card.author,
                  date:card.date,
                  tags:card.tags,
                  views:card.views,
                  description:card.description
                }
              }
          />
        )
        })
      }
    </div>
  )
}
export default App;