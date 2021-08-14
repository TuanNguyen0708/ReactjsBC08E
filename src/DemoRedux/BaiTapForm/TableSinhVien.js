import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableSinhVien extends Component {
    render() {
        return (
            <div>
                <div className='card' >
                    <table className='table' >
                        <thead>
                            <tr className='bg-dark text-white'>
                                <th>Mã SV</th>
                                <th>Họ Tên</th>
                                <th>Số Điện Thoại</th>
                                <th>Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.mangSinhVien.map((sinhVien,index)=> {
                                    return <tr key={index}>
                                        <td>{sinhVien.maSinhVien}</td>
                                        <td>{sinhVien.hoTen}</td>
                                        <td>{sinhVien.soDienThoai}</td>
                                        <td>{sinhVien.email}</td>
                                        <td>
                                            <button className='btn btn-danger mr-2' onClick={()=> {
                                                const action = {
                                                    type: 'XOA_SINH_VIEN',
                                                    maSinhVien:sinhVien.maSinhVien
                                                }
                                                this.props.dispatch(action);
                                            }}>Xóa</button>
                                            <button className='btn btn-primary' onClick={()=> {
                                                const action = {
                                                    type: 'CHINH_SUA',
                                                    sinhVienChinhSua: sinhVien
                                                }
                                                this.props.dispatch(action)
                                            }}>Chỉnh Sửa</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien:state.baiTapFormReducer.mangSinhVien
    }
}


export default connect(mapStateToProps)(TableSinhVien)