import React,{useState} from 'react'
import { CiGrid41 } from "react-icons/ci";
import { IoMdHome } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { BiBorderAll } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import './index.css'
import Setup from "../setup/Presenetation"

function Presentation(){
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div className={'main'}>
        <div className={'navigation'}>
            <ul>
                <li className={ 'lists'} >
                    <a href='#'>
                        <span className={'icon'}><BiBorderAll/></span>
                    </a>
                </li>
                <li className={toggleState ===1? 'list active': 'list'} onClick={() => toggleTab(1)}>
                    <a href='#'>
                        <span className={'icon'}><IoMdHome/></span>
                    </a>
                </li>
                <li className={toggleState ===2? 'list active': 'list'} onClick={() => toggleTab(2)}>
                    <a href='#'>
                        <span className={'icon'}><AiOutlineSetting/></span>
                    </a>
                </li>
                <li className={toggleState ===3? 'list active': 'list'} onClick={() => toggleTab(3)}>
                    <a href='#'>
                        <span className={'icon'}><CiGrid41/></span>
                    </a>
                </li>
                <li className={toggleState ===4? 'list active': 'list'} onClick={() => toggleTab(4)}>
                    <a href='#'>
                        <span className={'icon'}><AiOutlineBars/></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Presentation