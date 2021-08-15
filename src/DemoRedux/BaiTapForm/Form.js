import React, { Component } from 'react'
import { connect } from 'react-redux';
class Form extends Component {
    state = {
        value: {
            maSinhVien:'',
            soDienThoai:'',
            email:'',
            hoTen:'',
        },
        errors : {
            maSinhVien:'',
            soDienThoai:'',
            email:'',
            hoTen:'',
        }
    }
    handleChangeInput = (event) => {
        let {value, name} = event.target;
        let newValue = {...this.props.sinhVienChinhSuaLoadLai.value}
        newValue[name] = value;
        let regex;
        let attrValue = '';

        if (event.target.getAttribute('typeEmail')){
            attrValue = event.target.getAttribute('typeEmail');
            regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        }



        let newErrors = {...this.props.sinhVienChinhSuaLoadLai.errors}
        let messageErrors = '';
        if (value.trim()===''){
            messageErrors = name + ' không được bỏ trống !'
        }
        //nếu là email
        if(regex){
            if(attrValue === 'email'){
                if(!regex.test(value)){
                    messageErrors = name + ' phải đúng định dạng !'
                }
            }
        }




        newErrors[name] = messageErrors;

        //xử lý setState
        // this.setState({
        //     value:newValue,
        //     errors:newErrors
        // })
        this.props.dispatch({
            type: 'HANDLE_CHANGE_INPUT',
            sinhVienChinhSuaLoadLai: {
                value:newValue,
                errors:newErrors
            }
        })
    }
    handleSubmit = (event) => {
        // cản sự kiện submit
        event.preventDefault();
        let valid = true;
        for(let key in this.props.sinhVienChinhSuaLoadLai.errors) {
            if(this.props.sinhVienChinhSuaLoadLai.errors[key] !== ''){
                valid = false;
                console.log("Đã Vào Đây")
                break
            }
        }
        for(let key in this.props.sinhVienChinhSuaLoadLai.value) {
            if(this.props.sinhVienChinhSuaLoadLai.value[key] === ''){
                valid = false;
                console.log("Đã Vào Đây 2")
                break
            }
        }
         // cái khúc này a đang sai cái gì này 
        if(!valid) {
            alert('Dữ liệu không hợp lệ')
            return;
        }
        //submit lên redux
        const action = {
            type: 'THEM_SINH_VIEN',
            sinhVien: this.props.sinhVienChinhSuaLoadLai.value
        }
        this.props.dispatch(action)
    }

    render() {
        let {maSinhVien,email,hoTen,soDienThoai} = this.props.sinhVienChinhSuaLoadLai.value;



        return (
            <form className='card mt-5' onSubmit={this.handleSubmit}>
            <div className='card-header bg-dark text-white'>
               Thông Tin Sinh Viên
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group'>
                            <p>Mã Sinh Viên</p>
                            <input value={maSinhVien} className='form-control' name='maSinhVien' onChange={this.handleChangeInput}/>
                            <p className='text-danger'>{this.props.sinhVienChinhSuaLoadLai.errors.maSinhVien}</p>
                        </div>
                        <div className='form-group'>
                            <p>Email</p>
                            <input value={email} typeEmail='email' className='form-control' name='email' onChange={this.handleChangeInput}/>
                            <p className='text-danger'>{this.props.sinhVienChinhSuaLoadLai.errors.email}</p>
                        </div>
                    </div>
                    <div className='col-6'>
                    <div className='form-group'>
                            <p>Số Điện Thoại</p>
                            <input value={soDienThoai} className='form-control' name='soDienThoai' onChange={this.handleChangeInput}/>
                            <p className='text-danger'>{this.props.sinhVienChinhSuaLoadLai.errors.soDienThoai}</p>
                        </div>
                        <div className='form-group'>
                            <p>Họ Tên</p>
                            <input value={hoTen} className='form-control' name='hoTen' onChange={this.handleChangeInput}/>
                            <p className='text-danger'>{this.props.sinhVienChinhSuaLoadLai.errors.hoTen}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-footer text-left'>
                <button className='btn btn-success mr-2'>Thêm Sinh Viên</button>
                <button type='button' className='btn btn-primary' onClick={()=> {
                    const action = {
                        type: 'CAP_NHAT',
                        sinhVienCapNhat:this.props.sinhVienChinhSuaLoadLai.value
                    }
                    this.props.dispatch(action)
                }}>Cập nhật</button>
            </div>
        </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        sinhVienChinhSua: state.baiTapFormReducer.sinhVienChinhSua,
        sinhVienChinhSuaLoadLai: state.baiTapFormReducer.sinhVienChinhSuaLoadLai
    }
}

export default  connect(mapStateToProps)(Form)