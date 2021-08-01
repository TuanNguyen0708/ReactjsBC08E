import React, { Component } from 'react'
import { connect } from 'react-redux'
class Player extends Component {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>

                    <img style={{transform:'rotate(120deg)'}} className='mt-3' width={100} height={100} src={this.props.mangDatCuoc.find(item=> item.datCuoc === true).hinhAnh} />
                </div>
                <div className='speech-bubble'></div>
                <img style={{width:200,height:200}} src='./img/gameOanTuTi/player.png' />
                <div className='row'>
                    {this.props.mangDatCuoc.map((item,index) => {
                        //xét giá trị được thêm viền cho item được chọn
                        let border = {};
                        if(item.datCuoc) {
                            border = {border:'3px solid orange'};
                        }

                        return <div className='col-4'>
                        <button style={{border}} className='btnItem' onClick={() => {
                            {this.props.datCuoc(item.ma)}
                        }}>
                            <img width={50} height={50} src={item.hinhAnh} />
                        </button>
                    </div>
                    })}
                    
                    
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        mangDatCuoc: state.baiTapOanTuTiReducer.mangDatCuoc
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc
            })
        }
    }
    
}


export default connect(mapStateToProps,mapDispatchtoProps)(Player)