import React, { Component } from 'react'
import { connect } from 'react-redux';

class FormDangKy extends Component {

    state = {
        value: {
        taiKhoan:'',
        matKhau:'',
        email:'',
        hoTen:'',
        soDienThoai:'',
        maLoaiNguoiDung:'KhachHang',
        },
        errors : {
            taiKhoan:'',
            matKhau:'',
            email:'',
            hoTen:'',
            soDienThoai:'',
            maLoaiNguoiDung:'',
        }
    }
    handleChangeInput = (event)=> {
        let {value,name} = event.target;
        let newValue = {...this.props.nguoiDung.value};
        let regex;
        newValue[name] = value;

        let attrValue = '';
        if(event.target.getAttribute('typeEmail'))
        {
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }

        let newErrors = {...this.props.nguoiDung.error}
        let messageErrors = '';
        if(value.trim() === '') {
            messageErrors = name + 'Không đươc bỏ trống !';
        }

        //nếu là email
        if(regex) {
            if(attrValue==='email'){
                if(!regex.test(value)){
                    messageErrors = name + 'phải đúng định dạng !';
                }
            }
        }
        newErrors[name] = messageErrors;


        // this.setState({
        //     value:newValue,
        //     errors:newErrors
        // })
        this.props.dispatch({
            type: 'HANDLE_CHANGE_INPUT',
            nguoiDung: {
                value:newValue,
                error:newErrors
            }
        })
    }
    handleSubmit = (event) => {
        //cản sự kiện submit browser
        event.preventDefault();
        console.log(this.state)

        //bắt trường hợp lỗi sẽ ko cho submit
        //duyệt bắt erors phải bằng rỗng mới hợp lệ
        let valid = true;
        for(let key in this.state.errors){
            if(this.state.errors[key] != '') {
                valid = false;
                break;
            }
        }
        //duyệt bắt tất cả value phải khác rỗng mới hợp lệ
        for (let key in this.state.value) {
            if(this.state.value[key]=== '') {
                valid = false;
                break
            }
        }
        if(!valid) {
            alert('Dữ liệu không hợp lệ')
            return;
        }
        //submit lên redux tại đây khi tất cả hợp lệ
        const action = {
            type:'THEM_NGUOI_DUNG',
            nguoiDung: this.state.value
        }
        this.props.dispatch(action)
    }

    render() {
        let {taiKhoan,matKhau,hoTen,email,soDienThoai,maLoaiNguoiDung} = this.props.nguoiDung.value
        return (
            <form className='card mt-5' onSubmit = {this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    Form Đăng Ký
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Tài Khoản</p>
                                <input value={taiKhoan} className='form-control' name='taiKhoan' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mật Khẩu</p>
                                <input value={matKhau} className='form-control' name='matKhau' type='password' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.matKhau}</p>
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input value={email} typeEmail='email' className='form-control' name='email' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ Tên</p>
                                <input value={hoTen} className='form-control' name='hoTen' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                            <div className='form-group'>
                                <p>Số Điện Thoại</p>
                                <input value={soDienThoai} className='form-control' name='soDienThoai' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mã Loại Người Dùng</p>
                                <select value={maLoaiNguoiDung} className='form-control' name='maLoaiNguoiDung' onChange={this.handleChangeInput}>
                                    <option value='KhachHang'>Khách Hàng</option>
                                    <option value='QuanTri'>Quản Trị</option>
                                </select>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer text-left'>
                    <button className='btn btn-outline-success mr-2'>Đăng Ký</button>
                    <button type='button' className='btn btn-outline-primary' onClick={() => {
                        const action = {

                            type: 'CAP_NHAT_NGUOI_DUNG',
                            nguoiDungCapNhat: this.props.nguoiDung.value
                        }
                        this.props.dispatch(action)
                    }}>Cập Nhật</button>

                </div>
                
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nguoiDungChinhSua: state.baiTapQuanLyNguoiDungReducer.nguoiDungChinhSua,
        nguoiDung:state.baiTapQuanLyNguoiDungReducer.nguoiDung
    }
}

export default connect (mapStateToProps)(FormDangKy)