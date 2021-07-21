import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {sp,xemCT} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={sp.hinhAnh} height={350}/>
                    <div className="card-body bg-dark text-white">
                        <h3>{sp.tenSP}</h3>
                        <p>{sp.giaBan.toLocaleString()}</p>
                        <button className="btn btn-success" onClick={() => {
                            xemCT(sp);
                        }}>Xem chi tiết</button>
                </div>
                </div>
            </div>
        )
    }
}
