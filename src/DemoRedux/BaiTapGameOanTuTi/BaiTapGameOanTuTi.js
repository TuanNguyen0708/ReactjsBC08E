import React, { Component } from 'react'
import './BaiTapOanTuTi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'
import { connect } from 'react-redux'
class BaiTapGameOanTuTi extends Component {
    render() {
    



        return (
            <div className='gameOanTuTi'>
                <div className='row  text-center mt-3'>
                    <div className='col-4 mt-5'>
                        <Player />
                    </div>
                    <div className='col-4 mt-3'>
                        <KetQuaTroChoi />
                        <button className='btn btn-success p-2 display-4 mt-5' onClick={()=> {
                            this.props.playGame()
                        }}>Play Game</button>
                    </div>
                    <div className='col-4 mt-3'>
                        <Computer />
                    </div>
                    
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0
            //khai báo hàm lặp đi lặp lại
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                })
                count ++;
                if(count >=10){
                    //dừng hàm set interval
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
            
        }
    }
}
export default connect(null,mapDispatchToProps)(BaiTapGameOanTuTi)