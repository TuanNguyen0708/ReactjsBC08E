import React, { Component } from 'react'

export default class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className='mt-5'>
                    <button className='gheDuocChon'></button>
                    <span className='text-light' style={{fontSize:'30px'}}>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'></button>
                    <span className='text-light' style={{fontSize:'30px'}}>Ghế đang đặt</span>
                    <br />
                    <button style={{marginLeft:0}} className='ghe'></button>
                    <span className='text-light' style={{fontSize:'30px'}}>Ghế chưa đặt</span>

                </div>

               <div className='mt-5  boder-2'>
                    <table className="table">
                        <thead>
                        <tr className='text-light' style={{fontSize:'25px'}}>
                            <th>Số Ghế</th>
                            <th>Giá</th>
                            <th>Hàng</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className='text-light'>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                            <tr className='text-light'>
                                <th>Số Ghế</th>
                                <th>Giá</th>
                                <th></th>
                            </tr>
                        </tbody>
                      
                    </table>
                </div>

            </div>

            
        )
    }
}
