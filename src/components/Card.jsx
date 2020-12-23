import React from "react";

export default function Card(props) {
  const {imgURL, name, build, age, status, like} = props.item;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={props.item.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="small">Ad ve Soyad: <span className="props-color">{props.item.name}</span></h6>
          <h6 className="small">Bina Adı: <span className="props-color">{props.item.build}</span></h6>
          <h6 className="small">Yaş: <span className="props-color">{props.item.age}</span></h6>
          <h6 className="small">Durum: <span className="props-color">{props.item.status}</span></h6>
        </div>
      </div>
    </div>
  );
}
