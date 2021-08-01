import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './BaiTapGameXucXac.css'


export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className='bg-game'>
                <h3 className='text-center mt-5 display-4'>Bài tập game xúc xắc</h3>
                
                <XucXac />
                <KetQuaTroChoi />
                
            </div>
        )
    }
}
