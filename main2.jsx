import './main2.css'
import img4 from '../src/assets/colba.svg'
// import img6 from '../src/assets/hand.svg'

const Main2=()=>{
    return(
        <>
            <section>
                <div className='main'>
                    <div className='main2'>
                        <div className="main3">
                            <h1>Biz <span>haqimizda</span></h1>
                            <p className='p1'>Colba ta'lim markazi - 2010 vil o'z faoliyatini boshlagan va hozirgi kunda kimyo va biologiyaga ixtisoslashgan O'zbekistondagi eng katta o'quv markaz.</p>
                            <p className='p2'>Markazimiz tabiiy fanlarga ixtisoslashgan va 2018-yildan boshlab majburiy fanlarni (Matematika, Tarix, Ona tili) ham o'qitib kelmoqda. Colba Ta'lim Markazining Toshkent shahrida 2 ta filiali mavjud.</p>
                            <div className="fanlar">
                                <h2>Chuqurlashtirilgan fanlar</h2>
                                <div className="btns2">
                                    <button className='Kimyo'>Kimyo</button>
                                    <button className='Biologiya'>Biologiya</button>
                                </div>
                            </div>


                        </div>

                        {/* <img src={img6} alt="" className='strelka' /> */}

                        <div className="img">
                            <img src={img4} alt="" width={'645px'} height={'493px'} />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
        
export {Main2}