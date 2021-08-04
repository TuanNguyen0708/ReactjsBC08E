import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinGhe from './ThongTinGhe'

export default class BaiTapBookingTicket extends Component {
    render() {
        return (
            <div className='bookingMovie' style={{position:'fixed', width:'100%', height:'100%', backgroundImage:'url(./img/bookingTicket/bgmovie.jpg)',
            backgroundSize:'100%'}}>
                <div style={{position:'fixed', width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.7)'}}>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8 text-center'>
                            <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM CYBERLEARN</div>
                            <div className='mt-3 text-light' style={{fontSize:'25px'}}>Màn Hình</div>
                            <div className='mt-2' style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <div className='screen'></div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='text-light mt-2' style={{fontSize:'35px'}}>DANH SÁCH GHẾ BẠN CHỌN</div>
                            <ThongTinGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
