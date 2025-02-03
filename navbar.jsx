import img from '../src/assets/Vector.png'
import './navbar.css'
import img2 from '../src/assets/Vector.png'
import logo from '../src/assets/Group 1.svg'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';


const Navbar=()=>{
    let [button, setButton] = useState(false)

    return(
        <>
            <header>
                <div className="container">
                    <div className="container2">
                        <div className='container3'>
                            <div className="logo" >
                                <img src={logo} alt="" width={'137.61px'} height={'48px'}/>
                            </div>
                            <ul>
                                <li><a href="#"></a>Colba haqida</li>
                                <li><a href="#"></a>O'quv tizim</li>
                                <li><a href="#"></a>Afzalliklar</li>
                                <li><a href="#"></a>Natijalar</li>
                                <li><a href="#"></a>FAQ</li>

                            </ul>

                            
                
                        </div>
                        <div className='btns'>
                            <select id="languageSwitcher" onchange="changeLanguage()">
                                <option value="en">English</option>
                                <option value="uz"><img src={img2} alt="" width={'24px'} height={'24px'} />Uzbek</option>
                                <option value="ru">Russian</option>
                            </select>

                            <button><i class="fa-solid fa-phone"></i>+998 93 584 29 39</button>

                            
                        </div>
                        
                        <div className="logo2">
                                <IoMenu  onClick={()=>setButton(!button)} className='menu'/>
                        </div>

                    </div>

                        
                </div>

                <ul style={{display:button?"block":"none", textAlign:'end', justifyContent:'center'}}>
                    <li><a href="#"></a>Colba haqida</li>
                    <li><a href="#"></a>O'quv tizim</li>
                    <li><a href="#"></a>Afzalliklar</li>
                    <li><a href="#"></a>Natijalar</li>
                    <li><a href="#"></a>FAQ</li>

                </ul>
            </header>
        </>


        

    )
}



export {Navbar}