import React from 'react'
import ServiceItem from '../ServiceItem'

import data from './data.json'



export default class ServiceChooser extends React.Component {
  constructor({list = data.DEFAULT_LIST}) {
    super()
    this.state = {
      list : list
    }
  }

  handleItemClick(e) {
    console.log(e.currentTarget.dataset.id)
    let eventId = +e.currentTarget.dataset.id;
    this.setState({
      list: list.map((elem)=> {
        return {
          ...elem , id : elem.id === eventId ?  !elem.id : elem.id
        }
      })
    })
  }

  render() {
    let { list } = this.state
    return (
      <div className='service-wrapper'>
        {
          list.map((item)=>{
            return <ServiceItem key={item.id} obj={item} handlerClick={this.handleItemClick.bind(this)} />
          })
        }
      </div>
    )
  }

} 