import React, { Component } from 'react'

export default class BaiTapThuKinh extends Component {

    state = {
        imgSrc: './img/Bài tập glasses/glassesImage/v7.png'
        
    }


    changeGlass = (glass) => {
        this.setState({
            imgSrc: `./img/Bài tập glasses/glassesImage/${glass}.png`
        })
    }


    render() {
        return (
            <div>
                <div style={{backgroundImage: `url("./img/Bài tập glasses/glassesImage/background.jpg")`,
                    backgroundPosition: 'center',
                    height: '120vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    }}>
                    <h3 className="d-flex justify-content-center p-4" style={{color: 'white', backgroundColor: 'rgb(32, 33, 36)', opacity: '0.5'}}>TRY GLASSES APP ONLINE</h3>
                    <div className="d-flex justify-content-around mt-4">
                        <div className="text-center" style={{backgroundImage: `url("./img/Bài tập glasses/glassesImage/model.jpg")`,
                        width: '250px',
                        height: '300px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                            <img style={{width:'140px', height: '50px', marginTop: '70px'}} src="./img/Bài tập glasses/glassesImage/v7.png" />
                            <div className="text-left" style={{backgroundColor: 'rgba(255, 193, 0, 0.4)', marginTop: '100px'}}>
                                <h5>FENDI F8750</h5>
                                <span>
                                    Lorem ipsum dolor sit amet, else elit. about ut omnis it my, on ea.
                                </span>
                            </div>
                        </div>
                        <div className="text-center" style={{backgroundImage: `url("./img/Bài tập glasses/glassesImage/model.jpg")`,
                        width: '250px',
                        height: '300px',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'}}>
                            <img style={{width:'140px', height: '50px', marginTop: '70px'}} src={this.state.imgSrc}/>
                        </div>
                    </div>
                    <div style={{display: 'flex', width: '100%', marginTop: '50px'}}>
                        <div style={{width: '1000px',
                        height: '250px',
                        margin: '0 auto',
                        padding: '20px 40px',
                        backgroundColor: 'gray',}}>
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g1.jpg" onClick={() => {
                                this.changeGlass('v1')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g2.jpg"  onClick={() => {
                                this.changeGlass('v2')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g3.jpg"  onClick={() => {
                                this.changeGlass('v3')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g4.jpg"  onClick={() => {
                                this.changeGlass('v4')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g5.jpg"  onClick={() => {
                                this.changeGlass('v5')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g6.jpg"  onClick={() => {
                                this.changeGlass('v6')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g7.jpg"  onClick={() => {
                                this.changeGlass('v7')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g8.jpg"  onClick={() => {
                                this.changeGlass('v8')
                            }} />
                            <img style={{width: '100px', height: '50px', margin: '25px 25px', border: '1px solid black'}} src="./img/Bài tập glasses/glassesImage/g9.jpg"  onClick={() => {
                                this.changeGlass('v9')
                            }} />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
