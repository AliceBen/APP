import React , { Component } from 'react'
import { connect } from "react-redux";
import s from './style.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={s.homeContainer}>
        <p>请输入您的信息</p>
        <form>
          <div>
            <span>销售金额：</span>
            <input placeholder="请输入订单金额" />
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(Home)