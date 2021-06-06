import React, {Component} from 'react';

class Canvas extends Component {
    state={
        clean:false
    }
    Canvas=()=>{
        let canvas=document.getElementById('cl')
        let ctx=canvas.getContext('2d');
        let myColor='red';
        document.getElementById('color').oninput=function (){
            myColor=this.value;
        }

       canvas.onmousedown=function (event){
           canvas.onmousemove=function (event){
               let x=event.offsetX;
               let y=event.offsetY;
               ctx.fillRect(x-5,y-5,5,5);
               ctx.fillStyle=myColor;
               ctx.fill();
           }
           canvas.onmouseup=function (){
               canvas.onmousemove=null;
           }
       }
    }
    Line=()=>{
        let canvas=document.getElementById('cl');
        let ctx=canvas.getContext('2d');

        canvas.onmousedown=function (event){
            const x1=event.offsetX;
            const y1=event.offsetY;
            canvas.onmousemove=function (event){
               canvas.onmouseup=function (event){
                   let x2=event.offsetX;
                   let y2=event.offsetY;
                   ctx.moveTo(x1,y1);
                   ctx.lineTo(x2,y2);
                   ctx.stroke();
               }
            }
            canvas.onmouseup=function (){
                canvas.onmousemove=null;
            }
        }
    }
    SeenLine=()=>{
        let canvas=document.getElementById('cl');
        let ctx=canvas.getContext('2d');

        canvas.onmousedown=function (event){
            const x1=event.offsetX;
            const y1=event.offsetY;
            canvas.onmousemove=function (event){
                let x2=event.offsetX;
                let y2=event.offsetY;
                ctx.moveTo(x1,y1);
                ctx.lineTo(x2,y2);
                ctx.stroke();
            }
            canvas.onmouseup=function (){
                canvas.onmousemove=null;
            }
        }
    };
    Circle=()=>{
        let canvas=document.getElementById('cl');
        let ctx=canvas.getContext('2d');
        canvas.onmousedown=function (event){
            const x1=event.offsetX;
            const y1=event.offsetY;
            canvas.onmousemove=function (event){
               canvas.onmouseup=function (){
                   let x2=event.offsetX;
                   let y2=event.offsetY;
                   let pi=Math.PI;
                   const l=Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
                   ctx.arc(x1,y1,l,0,2*pi,true);
                   ctx.stroke();
               }
            }
            canvas.onmouseup=function (){
                canvas.onmousemove=null;
                ctx.stroke();
            }
        }
    };
    cleanCanvas=()=>{
        this.setState({
            clean:!this.state.clean
        })
    }
    render() {
        const {clean}=this.state;
        return (
            <div className={'container'}>
               <div className={'row '}>
                  <div className={'col-md-12'}>
                      <button onClick={this.Canvas}  className={'btn btn-secondary py-0 mr-1'}>Draw</button>
                      <button onClick={this.Circle}  className={'btn btn-secondary py-0 mx-1'}>Circle</button>
                      <button onClick={this.Line}  className={'btn btn-secondary py-0'}>line</button>
                      <button onClick={this.SeenLine}  className={'btn btn-secondary py-0 mx-1'}>Visibleline</button>
                      <button onClick={this.cleanCanvas}  className={'btn btn-secondary py-0 mx-1'}>Clean</button>
                  </div>
                   <div className={'col-md-12'}>
                       {!clean
                           ?
                           <canvas id="cl" width="900" height="400"></canvas>
                           :
                           " "
                       }
                   </div>
               </div>
            </div>
        );
    }
}

export default Canvas;