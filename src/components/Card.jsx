import React from "react";
import Like from "./likeButton/Like";
import UnLike from "./likeButton/UnLike";
import ShowLike from "./likeButton/ShowLike";

export default function Card(props) {
  const { imgURL, name, build, age, status, like } = props.item;

  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem(name) || 0)
  );

  const clickHandler = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };
  localStorage.setItem(name, counter);
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src={props.item.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="small">
            Ad ve Soyad: <span className="props-color">{props.item.name}</span>
          </h6>
          <h6 className="small">
            Bina Adı: <span className="props-color">{props.item.build}</span>
          </h6>
          <h6 className="small">
            Yaş: <span className="props-color">{props.item.age}</span>
          </h6>
          <h6 className="small">
            Durum: <span className="props-color">{props.item.status}</span>
          </h6>
        </div>
        <div className="d-flex justify-content-between">
          <div className="button-area">
            <Like onClick={clickHandler} />
            <UnLike onClick={clickHandler} />
          </div>
          <div>
            <ShowLike counter={counter} />
          </div>
        </div>
      </div>
    </div>
  );
}
