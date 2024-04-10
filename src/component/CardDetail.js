const CardDetail = ({ carData, handleSelect }) => {
  const { brand, model, year, car_registration, remark } = carData;
  const src = `/image/${brand}_${model}_${year}.jpeg`;
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={src} width="300" height="200" class="card-img-top" alt={src} />
      <div class="card-body">
        <h5 class="card-title">
          {brand} {model} {year}
        </h5>
        <div>ป้ายทะเบียน {car_registration}</div>
        <p class="card-text"> {remark}</p>
        <div className="text-end">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target="#editModal"
              onClick={handleSelect}
            >
               แก้ไข
            </button>
            <button type="button" class="btn btn-danger">
              ลบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
