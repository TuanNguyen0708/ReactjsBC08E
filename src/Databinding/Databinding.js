import React, { Component } from 'react'

export default class Databinding extends Component {

    //thuộc tính
    name = 'Tuấn'
    img = "https://picsum.photos/200/200"



    //Phương thức tự xây dựng
    renderCard = () =>{
        let product = {
            id: 1,
            name: 'Iphone',
            price: 1000,
            img: 'https://picsum.photos/id/10/200/200'
        }

        return <div className="card">
            <img src={product.img} />
            <div className="card-body">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-success">Mua hàng</button>
            </div>
        </div>
    }



    render() {
        //Khai báo biến, hàm (khai báo sẽ có từ khóa let var const và được khai báo trong hàm và phương thức)
        let tenHocVien = 'Tuấn Nguyễn'


        return (

            <div className="container">
                <div id="content">{tenHocVien}</div>
                <div id="content">{this.name}</div>
                <div className="card v-25">
                    <img src={this.img} />
                </div>
                {this.renderCard()}
            </div>
        )
    }
}
