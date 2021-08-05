import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGhe extends Component {
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
                            <th></th>
                        </tr>
                        </thead>
                        <tbody className='text-warning'>
                           {this.props.danhSachGheDangDat.map((gheDangDat,index)=> {
                               return <tr key={index}>
                                   <td>{gheDangDat.soGhe}</td>
                                   <td>{(gheDangDat.gia).toLocaleString()}</td>
                                   <td><button onClick={()=>{
                                       this.props.dispatch({
                                           type: 'HUY_GHE',
                                           soGhe:gheDangDat.soGhe
                                       })
                                   }}>Hủy</button></td>
                               </tr>
                           })}
                        </tbody>
                        <tfoot>
                            <tr className='text-warning'>
                                <td></td>
                                <td>Tổng Tiền</td>
                                <td>{this.props.danhSachGheDangDat.reduce((tongTien,gheDangDat,index) => {
                                    return tongTien += gheDangDat.gia
                                },0).toLocaleString()}</td>
                            </tr>
                        </tfoot>
                      
                    </table>
                </div>

            </div>

            
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.baiTapDatVeReducer.danhSachGheDangDat
    }
}
export default connect(mapStateToProps)(ThongTinGhe)