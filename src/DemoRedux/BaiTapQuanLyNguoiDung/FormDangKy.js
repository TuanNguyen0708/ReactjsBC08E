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
        let newValue = {...this.state.value};
        let regex;
        newValue[name] = value;

        let attrValue = '';
        if(event.target.getAttribute('typeEmail'))
        {
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }

        let newErrors = {...this.state.errors}
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


        this.setState({
            value:newValue,
            errors:newErrors
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
                                <input className='form-control' name='taiKhoan' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.taiKhoan}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mật Khẩu</p>
                                <input className='form-control' name='matKhau' type='password' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.matKhau}</p>
                            </div>
                            <div className='form-group'>
                                <p>Email</p>
                                <input typeEmail='email' className='form-control' name='email' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.email}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>Họ Tên</p>
                                <input className='form-control' name='hoTen' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.hoTen}</p>
                            </div>
                            <div className='form-group'>
                                <p>Số Điện Thoại</p>
                                <input className='form-control' name='soDienThoai' onChange={this.handleChangeInput} />
                                <p className='text-danger'>{this.state.errors.soDienThoai}</p>
                            </div>
                            <div className='form-group'>
                                <p>Mã Loại Người Dùng</p>
                                <select className='form-control' name='maLoaiNguoiDung' onChange={this.handleChangeInput}>
                                    <option value='KhachHang'>Khách Hàng</option>
                                    <option value='QuanTri'>Quản Trị</option>
                                </select>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer text-left'>
                    <button className='btn btn-outline-success mr-2'>Đăng Ký</button>
                    <button className='btn btn-outline-primary'>Cập Nhật</button>

                </div>
                
            </form>
        )
    }
}

export default connect ()(FormDangKy)