import React from "react";

const CoverDetails = (props) => {
  const {title,suptitle,description,photo,time,sort} = props.data;
    console.log(props);
  return (
    <div className="d-flex flex-row cover-detail">
      <div className="cover-details" style={{borderRight:'1px solid gray',margin:'5px',padding:'5px'}}>
      <img style={{height:'220px', width:'320px'}} src={photo} alt=""/>
        <h2>{title}</h2>
        <h5>{suptitle}</h5>
        <p><small>{description}</small></p>
        <p><small>{(new Date()).getHours()} hour ago</small></p>
        <p><small>{sort}</small></p>
        <hr/>
      </div>
      
      <div className="cover-details" style={{borderRight:'1px solid gray',margin:'5px',padding:'5px'}}>
        <img style={{height:'220px', width:'320px'}} src={photo} alt=""/>
        <h2>{title}</h2>
        <h5>{suptitle}</h5>
        <p><small>{description}</small></p>
        <p><small>{(new Date()).getHours()} hour ago</small></p>
        <p><small>{sort}</small></p>
        <hr/>
      </div>
      <div className="cover-details" style={{borderRight:'1px solid gray',margin:'5px',padding:'5px'}}>
        <img style={{height:'220px', width:'320px'}} src={photo} alt=""/>
        <h2>{title}</h2>
        <h5>{suptitle}</h5>
        <p><small>{description}</small></p>
        <p><small>{(new Date()).getHours()} hour ago</small></p>
        <p><small>{sort}</small></p>
        <hr/>     
      </div>
      
    </div>

    
  );
};

export default CoverDetails;
