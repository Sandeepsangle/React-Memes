import React from 'react'
import { useState } from 'react'
const Test = () => {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [mails,setMails] = useState()
    const [passwords,setPasswords] = useState()
    // const [sam ,setSam] = useState([])
  // test.js file was created to test how to store data in localstorage with array of objects ... don't delete it is for reference
    function handleClick(){
        var details = JSON.parse(localStorage.getItem('details')||"[]")
        var detail={
            name:name,
            password:password
        }
        details.push(detail)
        localStorage.setItem("details",JSON.stringify(details))
        let mail = JSON.parse(localStorage.getItem("details"))
        let namee = mail.map((item)=>{
          if (item.name === name & item.password === password) {

            setMails(item.name)
            setPasswords(item.password)
          }
        })
        // let set = namee.length
        // let select = namee[set]
        // return setSam(select)

    }
  return (
    <div>
        <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        value = {name}
        onChange={(event) => setName(event.target.value)}
        />name
        
        <input
         type="password"
         className="form-control"
         placeholder="Enter Password"
         value={password}
         onChange={(event) => setPassword(event.target.value)}/>password
        <button onClick={handleClick}>submit</button>
        {mails}
        {passwords}
        
        </div>
  )
}

export default Test