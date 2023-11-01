import React, { useState, useEffect } from "react";
// import "./App.css";
import "./Intermediate.css"
import axios from "axios";
import { css, jsx } from "@emotion/css";
import styled from "@emotion/styled";
import Select from "react-select";
// const Button = styled.button`Background-color:blue`
const Intermediate = () => {
  const menu = [
    { label: "24" },
    { label: "28" },
    { label: "32" },
    { label: "36" },
  ];
  // styling select dropdown option
  const styles = {
    control: (base) => ({
      ...base,
      minHeight: 25,
      minWidth: 30,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };
  //checkbox
  const [isChecked,setIsChecked] = useState(false)
  const [color,setColor] =useState("")
  const handleOnChange =event =>{
    const colors = event.target.name
    if(!isChecked){
      setColor(colors)
      setIsChecked(isChecked)
    }
  }
  const [tempdata, setTempdata] = useState([]);
  const [product, setProduct] = useState([]);
  const [inputText, setInputText] = useState({
    topText: "",
    bottomText: "",
  });
  const [result, ddlvalue] = useState(menu.label);
  const ddlhandler = (e) => {
    ddlvalue(e.label);
  };
  const card = css`
    font-size: ${result}px;
    color : ${color};
  `;
  // created getData method to generate random memes on button click
  const getData = () => {
    const value = product.map((item) => {
      return [item.url];
    });
    let random_index = Math.floor(Math.random() * value.length);
    let selected_image = value[random_index];
    setTempdata(selected_image);
  };
  const [allMemeImgs, setAllMemeImgs] = useState([]);
  const GetProductData = async () => {
    try {
      await axios
        .get("https://api.imgflip.com/get_memes")
        .then((res) => {
          //console.log('Array response',res.data.data.memes)
          setProduct(res.data.data.memes);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetProductData();
  }, []);
  // created handlechange method to store input field data 
  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <div className="meme-container ">
        <form onSubmit={handleSubmit}>
          <a href="#" className="btn btn-primary" onClick={() => getData()}>
            Click here to Generate Random Meme
          </a>
          <input
            type="text"
            name="topText"
            placeholder="Add Top Text"
            value={inputText.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Add Bottom Text"
            value={inputText.bottomText}
            onChange={handleChange}
          />
          <div style={{width:"200px", marginLeft:"200px"}}>
          <Select options={menu} styles={styles} onChange={ddlhandler} />
          </div>
          
          <div className="checkbox">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                name = 'red'
                type="checkbox"
                checked = {isChecked}
                onChange ={handleOnChange}
                id="inlineCheckbox1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                <h4 className="text-white bg-dark">Red</h4>
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name ='green'
                checked = {isChecked}
                onChange ={handleOnChange}
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox2">
               <h4 className="text-white bg-dark">Green</h4>
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                name='blue'
                type="checkbox"
                checked = {isChecked}
                onChange ={handleOnChange}
                id="inlineCheckbox3"
                defaultValue="option3"
              />
              <label className="form-check-label" htmlFor="inlineCheckbox3">
                <h4 className="text-white bg-dark" >Blue</h4>
              </label>
            </div>
          </div>
          <button  onClick={() => getData()}>Generate</button>
        </form>
        <div className="meme">
          <img
            src={tempdata}
            alt="click Button to See Meme"
            width="400px"
            height="380px"
          />
          <h2 className="top">
            <p className={card}>{inputText.topText}</p>
          </h2>
          <h2 className="bottom">
            <p className={card}>{inputText.bottomText}</p>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Intermediate;
