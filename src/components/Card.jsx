import React from "react";

export default function Card() {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="small">
            Ad ve Soyad: <span />
          </h6>
          <h6 className="small">
            Bina Adı: <span />
          </h6>
          <h6 className="small">
            Yaş: <span />
          </h6>
          <h6 className="small">
            Durum: <span />
          </h6>
        </div>
      </div>
    </div>
  );
}
