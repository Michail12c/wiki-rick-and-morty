import React from 'react';
import { withRouter } from 'react-router-dom';

const PersonageDetails = ({personage, history}) => {

  const updateUrl = () => {
    history.push('/');
  }


  if(document.documentElement.scrollTop > 0) {
    window.scrollTo(0, 0)
  }

  return (
   <div className="personage">

     <button onClick={updateUrl}>Назад</button>

     { personage && <div className="wrapper-personage">
        <img src={personage.image}/>
        <div>
        <p><span>номер: </span>{personage.id}</p>
        <p><span>имя: </span>{personage.name}</p>
        <p><span>пол: </span>{personage.gender}</p>
        <p><span>вид: </span>{personage.species}</p>
        <p><span>статус: </span>{personage.status}</p>
        </div>
     </div> }
   </div>
  );
}

export default withRouter(PersonageDetails);
