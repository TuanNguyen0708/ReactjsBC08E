import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render() {
        let {soBanChoi,soBanThang,banChon} = this.props.baiTapXucXacReducer;
        console.log('banChon',banChon);
        return (
            <div className='container text-center'>
                <div className='display-4'>
                    Bạn chọn: <span className='text-warning'>{banChon ? 
                    'Tài' : 'Xỉu'}
                    </span></div>
                <div className='display-4'>
                   Số bàn thắng: <span className='text-success'>{soBanThang}</span></div>
                   <div className='display-4'>
                   Tổng số lần chơi: <span className='text-primary'>{soBanChoi}</span></div>
                <button className='btn bg-success' onClick={() => {
                    const action = {
                        type: 'PLAY_GAME',
                    }
                    this.props.dispatch(action)
                }}>
                    <div className='display-4'>Play Game</div>
                </button>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        baiTapXucXacReducer: rootReducer.baiTapXucXacReducer,
        // banChon: rootReducer.baiTapXucXacReducer.banChon
        // soBanThang: rootReducer.baiTapXucXacReducer.soBanThang
        // soBanChoi: rootReducer.baiTapXucXacReducer.soBanChoi

    }
}


export default connect (mapStateToProps)(KetQuaTroChoi);