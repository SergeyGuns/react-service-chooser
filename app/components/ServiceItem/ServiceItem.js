import React from 'react'

const DEFAULT = {
  "id": 1,
  "name": "Service Name",
  "discription": "Servise discription",
  "price": 150,
  "added": false
}

export default class ServiceItem extends React.Component {
  constructor({obj = DEFAULT , handlerClick}) {
    super()
    this.state = {
      obj : obj
    }
    this.handlerClick = handlerClick
  }

  render () {
    let {id, name, discription, price, added} = this.state.obj
    return (
      <div data-id={id} onClick={this.handlerClick.bind(this)} className='list'>
        <div className='id'>{id}</div>
        <div className='name'>{name}</div>
        <div className='discription'>{discription}</div>
        <div className='price'>{price}</div>
        <div className='added'>{''+added}</div>
      </div>
    )
  }
}