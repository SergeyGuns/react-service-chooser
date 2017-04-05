import React from 'react'
import ServiceItem from '../ServiceItem'
import data from './data.json'



export default class ServiceChooser extends React.Component {
  constructor({list = data.DEFAULT_LIST}) {
    super()
    this.state = {
      list : list,
      count: 0
    }
  }


  handleItemClick(e) {
    console.log(e.currentTarget.dataset.id)
    let eventId = +e.currentTarget.dataset.id;
    let newState = {
      list : this.state.list.map((elem)=> {
        return {
          ...elem , added : (elem.id === eventId ?  !elem.added : elem.added)
        }
      })
    }
    this.setState(newState)
  }

  counterRefresh(list) {
    let count = 0
    for(let i = list.length;i--;) {

      if(list[i].added)
        count+=list[i].price;
    }
    return count;
  }

  render() {
    return (
      <div className='service-wrapper'>
        {
          this.state.list.map((item)=>{
            return <ServiceItem key={item.id} obj={item}  handlerClick={this.handleItemClick.bind(this)} />
          })
        }
        <div className='counter'> Count: {this.counterRefresh(this.state.list)}</div>
      </div>
    )
  }

} 