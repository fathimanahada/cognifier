
import './App.css';
import logo from './Assets/Avatar.svg'
import orbital from './Assets/square.svg';
import digital from './Assets/triangle.svg';
import brand from './Assets/square(1).svg';
import social  from './Assets/octagon.svg';
import sendbtn from './Assets/Button Icon.svg';
import chat from './Assets/chat.svg';
import addbtn from './Assets/add.svg'
import userIcon from './Assets/user.svg';
import { sendMsgToOpenAI } from './axios';
import { useEffect, useRef, useState } from 'react';
import ImageGenerator from './ImageGenerator/ImageGenerator'; // Import the ImageGenerator component



function App() {

  const MsgEnd = useRef(null);
  const[input,setInput] = useState("");
  const [ messages,setMessages] = useState([
    {
      text:"Hi,What kind of ideas are u looking for?",
      isBot:true,
    }
]);

useEffect(()=>{
  MsgEnd.current.scrollIntoView();
},[messages]);



  const handleSend = async()=>{
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text,isBot:false}
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      {text,isBot:false},
      {text:res, isBot:true}
    ])
  }

  const handleEnter = async (e)=>{
    if(e.key ==='Enter') await handleSend();
  }

  const navigateToImageGenerator = () => {
    window.location.href = '/ImageGenerator'; // Navigate to '/ImageGenerator' route
  }

  const handleButtonClick = () => {
    // Show a popup message when the button is clicked
    window.alert('Oopss..!Under Development.We will reach you soon...');
  }

  return (
    <div className="App">
        <div className="sidebar">
          <div className="upperside">
          
            <div className="uppersideTop"><img src={logo} alt="" className="logo" /><span className='brand'>Intellisys</span>
            
            <div className="listItems"><img src={addbtn} alt="" className="listItemsImg" /> <button className="add" onClick={()=>{window.location.reload()}}>Add New Project</button></div>
            </div>
            <div className="uppersideBottom">
            </div>
          </div>
            <div className="lowerside">
              <div className="listItems"><img src={orbital} alt="" className="listItemsImg" /><button className="orbit" onClick={()=>{window.location.reload()}}>Orbital oddysey</button></div>
              <div className="listItems"><img src={digital} alt="" className="listItemsImg" /><button className="AIimage" onClick={navigateToImageGenerator}>Digital ProductLaunch</button></div>
              <div className="listItems"><img src={brand} alt="" className="listItemsImg" /><button className="brandRefresh" onClick={handleButtonClick}>Brand Refresh</button></div>
              <div className="listItems"><img src={social} alt="" className="listItemsImg" /><button className="social" onClick={handleButtonClick}>Social Media Stratergy</button></div>

            </div>
        </div>
        <div className="main">
            <div className="chats">
              
              {messages.map((message,i)=>
                <div key={i} className={message.isBot?"chat bot":"chat"}>
                <img  className='chatimg' src={message.isBot?chat:userIcon} alt="" />
    <p className="text">{typeof message.text === 'string' ? message.text : message.text.answer}</p>              
    </div>
              )}
              <div ref={MsgEnd}/>
            </div>
            <div className="chatfooter">
              <div className="inp">
                <input type="text" placeholder='You can ask me anything! I am here to help you...' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}} /><button className="send"  onClick={handleSend}><img src={sendbtn} alt="" /></button></div>
            </div>

        </div>
    </div>
  );
}


export default App;
