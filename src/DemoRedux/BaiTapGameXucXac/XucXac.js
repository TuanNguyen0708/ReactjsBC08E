import React, { Component } from 'react'

//kết nối redux
import { connect } from 'react-redux'

class XucXac extends Component {

    renderKetQua = () => {
        //tính tổng điểm
        let tongDiem = this.props.mangXucXac.reduce((tong,xxnn,index) => {
            return tong += xxnn.diem;
        },0)
        let ketQua = tongDiem > 10 ? 'Tài' : 'Xỉu';

        return `${tongDiem} - ${ketQua}`
    }


    render() {
        //props(redux)
        let {mangXucXac} = this.props;
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-3'>
                    <button className='btn btn-danger' onClick={() => {
                        const action = {
                            type:'DAT_CUOC',
                            banChon: true
                        }
                        this.props.dispatch(action);
                    }}>
                        <div className='p-5 display-4'>Tài</div>
                    </button>
                    </div>
                    <div className='col-6 text-center'>
                        <img src={mangXucXac[0].hinhAnh} width={50} />
                        <img src={mangXucXac[1].hinhAnh} width={50} />
                        <img src={mangXucXac[2].hinhAnh} width={50} />
                        <br />
                        <div className='display-4'>
                            {this.renderKetQua()}
                        </div>
                    </div>
                    <div className='col-3'>
                    <button className='btn bg-dark text-white'onClick={() => {
                         const action = {
                            type:'DAT_CUOC',
                            banChon: false
                        }
                        this.props.dispatch(action);
                    }}>
                        <div className='p-5 display-4'>Xỉu</div>
                    </button>
                    </div>

                </div>
            </div>
        )
    }
}
//hàm lấy dữ liệu state từ redux
const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac : rootReducer.baiTapXucXacReducer.mangXucXac
    }
}

export default connect(mapStateToProps)(XucXac);
