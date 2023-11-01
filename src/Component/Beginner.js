import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Modal from './Modal';

const  Beginner = ()=> {
  const getData = (url) =>{
    let tempData = url
    setTempdata(url)
    return setShow(true)
  }
  const [tempdata, setTempdata] = useState([])
  const [show,setShow] = useState(false)
  const [product,setProduct] = useState([])
  const [search,setSearch] = useState("")
  const GetProductData = async() =>{
    // use axios to fectch data from api
    try{
      await axios.get('https://api.imgflip.com/get_memes')
      .then(res=>{
        //console.log('Array response',res.data.data.memes)
        // set data in array using useState
        setProduct(res.data.data.memes)
      })
      .catch(err=>{
        console.log('Error',err)
      })
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    GetProductData()
  },[])
  return (
    <>
      <div className="text-center mt-3">
        <input className="input-lg"
          type = "text"
          placeholder='Search here'
          style={{width:'10%'}}
          onChange={(e) =>{
          setSearch(e.target.value)
        }}
      />
      <button type="button" className="btn btn-dark btn" style={{width:'20%'}} >Random Search</button>
      </div>
      <Modal show={show} search={search} tempdata={tempdata} onClose={()=>setShow(false)}>
      {search}
    </Modal>
      <table className='table ' >
          <tr className='mt-3 table-dark ' >
          <th><pre>   Sr No    </pre></th>
          <th><pre>   Name    </pre></th>
          <th><pre>   image</pre></th>
          </tr>
      {product.filter(item =>{
        if(search =="" ){
          return ""
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase(""))){
          return item
        }
      }).
      map(item=>{
        return <tr className='ml-3'>
          <td ><pre>{item.id}  </pre></td>
          <td><pre>  {item.name}  </pre></td>
          <td><img src={item.url} width="100px" onClick={()=>getData(item.url)}  /></td>
          {/* onClick={()=>setShow(true)} */}
          </tr>
        
      })}
      </table>
    </>
  );
}

export default Beginner;


<table class="table table-bordered">
  ...
</table>