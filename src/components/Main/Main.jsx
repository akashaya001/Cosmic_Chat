import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
const Main = () => {

  const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} />
        </div>
        <div className="main-container">

        {!showResult
        ? <>
                    <div className="greet">
                <p><span>Hello there !</span></p>
                <p>How may I assist you today..?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Discover beautiful road trip destinations by typing your prompt below for suggestions.</p>
                    <img src={assets.compass_icon} />
                </div>

                <div className="card">
                    <p>If you're looking for project ideas, please type your prompt below and I'll be happy to help.</p>
                    <img src={assets.bulb_icon} />
                </div>

                <div className="card">
                    <p>If you need advice of any kind, please type your prompt below and I'll do my best to assist you.</p>
                    <img src={assets.message_icon} />
                </div>

                <div className="card">
                    <p>If you need help with writing your code, please type your prompt below and I'll assist you.</p>
                    <img src={assets.code_icon} />
                </div>
            </div>
        </>

        :
           <div className='result'>
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} alt="" />

                {loading
                ? <div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                </div>
                :  <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                }
               
            </div>
           </div>

        }


            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                 <span>&#169; Raj Deepak :)</span> 
                   Gemini may display inaccurate info, including about people, so double-check its responses. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main