import React, { Component } from 'react'
//thư viện kết nối redux
import { connect } from 'react-redux'

class GioHang extends Component {

    renderGioHang = () => {
       return this.props.mangGioHang.map((spGH,index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td><img src={spGH.hinhAnh} height={50} width={50} /></td>
                <td>{spGH.giaBan}</td>
                <td>
                <button className='btn btn-outline-primary' onClick={()=> {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick:spGH.maSP,
                            soLuong:1
                        }
                        this.props.dispatch(action)
                    }}>+</button>
                    {spGH.soLuong}
                    <button className='btn btn-outline-primary' onClick={()=> {
                        const action = {
                            type: 'TANG_GIAM_SO_LUONG',
                            maSPClick:spGH.maSP,
                            soLuong:-1
                        }
                        this.props.dispatch(action)
                    }}>-</button>
                </td>
                <td>{spGH.giaBan * spGH.soLuong}</td>
                <td><button className='btn btn-outline-danger' 
                onClick={() => {
                    const action = {
                        type: 'XOA_GIO_HANG',
                        maSPClick: spGH.maSP
                    }
                    this.props.dispatch(action);
                }}

                >Xóa</button></td>

            </tr>
        })
    }


    render() {

        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Mã sp</th>
                                            <th>Tên sp</th>
                                            <th>Hình Ảnh</th>
                                            <th>Giá bán</th>
                                            <th>Số Lượng</th>
                                            <th>Thành Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



//Hàm này giúp lấy giá trị state từ redux về biến đổi thành props của component
const mapStateToProps = (rootReducer) => {
    //trả về props là giá trị
    return {
        mangGioHang: rootReducer.gioHangReducer
    }
}

const ComponentGioHangRedux = connect(mapStateToProps)(GioHang);
export default ComponentGioHangRedux;