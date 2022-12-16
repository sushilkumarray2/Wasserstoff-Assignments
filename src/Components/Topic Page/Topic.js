import React, { useState,useRef } from "react";
import { useNavigate } from "react-router";
import './Topic.css'

function Topic({ topicName, topicDetails, setTopicList, topicList, topicID }) {

    const [topic, setTopic] = useState(topicName);
    const [selItem,setselItem] = useState([...topicDetails]);
    const [text,setText] = useState("");  // text to be selected
   const [arr,setArr] = useState([]);  // storing input in the array 
   const con = useRef();

    const navigate = useNavigate();

   

    function selectitem()
{
    if(window.getSelection)
    {
        let selected = window.getSelection().toString();
       setText(selected);
    }
    else if(document.selection)
    {
        let selected = document.selection.createRange().text;
      setText(selected);
    }
}
    

function submitFun(id)
{
    if(arr.length==0 && selItem.length==0)
    {
       let inp = con.current.innerText.trim();
        let obj = {id:"id5",details:inp};
        setArr([obj]);
        con.current.innerText = "";
        
        
    }
    
    if(text)
        {
         let obj = {id:id,details:text};
         setselItem([...selItem,obj]);
         let data = arr[0].details;
          data = data.substring(text.length).trim();
         let obj1 = {id:"id5",details:data};
         setArr([obj1]);
        }
    
}

    function handleSave() {
        if( topicID !== "" ) {
            topicList[topicID-1].title = topic;
            topicList[topicID-1].description = selItem;
        }
        else {
          let per = 0;
          let sum =0;
          let count =0;
           selItem.map((ele)=>{
            if(ele.id=="id1")
            {
                  sum+=1;
                  count++;
            }
            else if(ele.id=="id2")
            {
                sum+=2;
                count++;
            }
            else if(ele.id=="id3")
            {
                sum+=3;
                count++;
            }
            else if(ele.id=="id4")
            {
                sum+=4;
                count++;
            }
           })

            per = (sum/(count*4))*100
            
            let obj = {id: topicList.length+1,title: topic,description: selItem,percentage:per+"%"};
            console.log(obj);
            setTopicList([...topicList,obj])

            
        }
       navigate('/dashboard');
    }



    return(
        <div style={{margin: "30px"}}>
            <div>
                <span>Topic: </span>
                <input id="topic_name" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </div>
            <div style={{margin: "50px"}}>
                <h1>Description:</h1>
            
                <button style={{backgroundColor:"green"}} onClick={()=>submitFun("id4")}>UNDERSTOOD</button>
                <button style={{backgroundColor:"yellow"}} onClick={()=>submitFun("id3")}>SOMEWHAT UNDERSTOOD</button>
                <button style={{backgroundColor:"cyan"}} onClick={()=>submitFun("id2")}>NOT CLEAR</button>
                <button style={{backgroundColor:"red"}} onClick={()=>submitFun("id1")}>WHAT RUBBIS</button>

                <div id="textArea">
                <div  className="text_area" contentEditable="true" style={{width:"400px",height:"300px",border:"1px black solid"}} ref={con} onMouseUp={selectitem}>
                {
                    selItem.map((ele)=>
                         <span className={ele.id}>{ele.details} </span>
                    )
                }

                {
                    arr.map((ele)=>
                        <span className={ele.id}>{ele.details} </span>    
                    )
                } 
               </div>
                </div>
            </div>
            <button className="save" onClick={handleSave}>Save</button>
        </div>
    )
}

export default Topic;