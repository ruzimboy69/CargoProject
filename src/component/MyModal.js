import React from 'react';
import {useEffect,useState} from 'react'

function MyModal(props) {
    const[time ,setTime]=useState(0);
    useEffect(()=>{
       let a=setInterval(()=>{
            setTime(time=>time+1);
            console.log(time)
        },1000);

        return ()=>
            clearInterval(a);

    },[])
    return (
        <div className={'col-md-4'}>
            <div className={'card'}>
                <div className={'card-header text-center'}>
                  <h4>Time : {time}</h4>
                </div>
                <div className={'card-body'}>
                    <button onClick={()=>props.close(false)} className={'btn btn-primary'}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default MyModal;