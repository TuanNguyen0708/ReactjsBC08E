import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000, img: 'https://picsum.photos/id/1/200/200' },
        { id: 1, name: 'Iphone X', price: 2000, img: 'https://picsum.photos/id/2/200/200' },
        { id: 1, name: 'Iphone 11', price: 3000, img: 'https://picsum.photos/id/3/200/200' },
    ]

    renderProduct = () => {
        //Cách 1:
        // let content = [];
        // for(let i = 0; i < this.arrProduct.length; i ++) {
        //     // mỗi lần duyệt lấy ra 1 đối tượng product
        //     let product = this.arrProduct[i];
        //     let tagTr = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td><img src={product.img} /></td>
        //         <td>{product.price}</td>
        //     </tr>
        //     content.push(tagTr);
        // };
        // return content;

        //Cách 2
        let content = this.arrProduct.map((product,index) => {
            return <tr>
                 <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img width={100} src={product.img} /></td>
                <td>{product.price}</td>
            </tr>
        });
        return content;
    }
    renderProductCard = () => {
        let content = this.arrProduct.map((product,index) => {
            return <div className="col-4">
                <div className="card">
                    <img src={product.img} />
                    <div className="card-body bg-dark text-white">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        });
        return content;
    }


    render() {
        return (
            <div className="container">
                <h3>Danh sách sản phẩm</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>img</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {[<tr><td>1</td></tr>, <tr><td>2</td></tr>]} */}
                        {this.renderProduct()}
                    </tbody>
                </table>
                <hr />
                <h3>Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProductCard()}
                </div>

            </div>
        )
    }
}
