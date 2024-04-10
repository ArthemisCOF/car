import { useEffect, useState } from "react";
import Modal from ".";
import axios from "axios";
import SuccessForm from "./SuccessForm";

const EditFormModal = ({ selectCar, getCarList }) => {
  const [status, setStatus] = useState();
  return (
    <Modal id="editModal" title="แก้ไขรถ" status={status}>
      {status === "success" ? (
        <SuccessForm title='แก้ไขรถ' message={`แก้ไขสำเร็จ`} handleStatus={setStatus} />
      ) : (
        <EditForm handleStatus={setStatus} selectCar={selectCar} getCarList={getCarList} />
      )}
    </Modal>
  );
};

export default EditFormModal;

const EditForm = ({ handleStatus, selectCar, getCarList }) => {
  const [carDetail, setCarDetail] = useState(selectCar);

  const handleChange = (e) => {
    setCarDetail({ ...carDetail, [e.target.id]: e.target.value });
  };

  const handleEdit = () => {
    axios
      .put(
        `http://localhost:8080/api/car/${carDetail.car_registration}`,
        carDetail
      )
      .then(async () => {
        await getCarList()
        handleStatus("success");
      })
      .catch(() => {
        handleStatus("error");
      });
  };

  useEffect(() => {
    setCarDetail({ ...selectCar, remark: selectCar.remark || "" });
  }, [selectCar]);

  return (
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          แก้ไขรถ
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="brand" class="col-form-label">
              ยี่ห้อ:
            </label>
            <input
              type="text"
              class="form-control"
              id="brand"
              onChange={handleChange}
              value={carDetail.brand}
            />
          </div>
          <div class="mb-3">
            <label for="model" class="col-form-label">
              รุ่น:
            </label>
            <input
              type="text"
              class="form-control"
              id="model"
              onChange={handleChange}
              value={carDetail.model}
            />
          </div>
          <div class="mb-3">
            <label for="color" class="col-form-label">
              สี:
            </label>
            <input
              type="text"
              class="form-control"
              id="color"
              onChange={handleChange}
              value={carDetail.color}
            />
          </div>
          <div class="mb-3">
            <label for="year" class="col-form-label">
              ปี:
            </label>
            <input
              type="text"
              class="form-control"
              id="year"
              onChange={handleChange}
              value={carDetail.year}
            />
          </div>

          <div class="mb-3">
            <label for="remark" class="col-form-label">
              หมายเหตุ:
            </label>
            <input
              type="text"
              class="form-control"
              id="remark"
              onChange={handleChange}
              value={carDetail.remark}
            />
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
           ยกเลิก
        </button>
        <button type="button" class="btn btn-warning" onClick={handleEdit}>
          แก้ไข
        </button>
      </div>
    </div>
  );
};
