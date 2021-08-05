import React, { Component } from 'react'
import { connect } from 'react-redux';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe,index) => {

           
            let cssGheDaDat = '';
            let dissable = false;
            //trạng thái ghế đã được đặt
            if(ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                dissable= true
            }
            //trạng thái đang đặt
            let cssGheDangDat='';
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=>gheDangDat.soGhe===ghe.soGhe);
            if(indexGheDangDat!=-1) {
                cssGheDaDat = 'gheDangChon'
            }


            return <button onClick={() => {
                this.props.datGhe(ghe)
            }} disabled={dissable} className={`ghe ${cssGheDaDat}`} key={index} >
                {ghe.soGhe}
            </button>
        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang,index) => {
            return <button className='rowNumber'>
                {hang.soGhe}

            </button>
        })
    }

    renderHangGhe = () => {
        if(this.props.soHangGhe===0) {
            return <div className='ml-3'>
                {this.renderSoHang()}
            </div>
        }else {
            return <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
        </div>
        }
       
    }

    render() {
        return (
            <div className='text-light text-left ml-5 mt-1' style={{fontSize:'30px'}}>
                {this.renderHangGhe()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        datGhe:(ghe) => {
            dispatch({
                type:'DAT_GHE',
                ghe
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HangGhe)