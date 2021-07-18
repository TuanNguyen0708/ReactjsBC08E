import React, { Component } from 'react'

export default class Footer extends Component {
/*
    this.props: là 1 thuộc tính có sẵn của reat class component dùng để nhận giá trị từ component cha truyền vào (component sử dụng thẻ này)
 */
    render() {
        return (
            <footer style={{backgroundColor:this.props.bgColor}} className="mt-2 text-white text-center">
                {this.props.content}
            </footer>
        )
    }
}
