import React, { Component } from 'react'
import Form from './Form'
import TableSinhVien from './TableSinhVien'

export default class BaiTapForm extends Component {
    render() {
        return (
            <div className='container'>
                <Form />
                <TableSinhVien />
            </div>
        )
    }
}
