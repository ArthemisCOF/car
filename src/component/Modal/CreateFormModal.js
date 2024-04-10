import { useState } from "react";
import Modal from ".";
import axios from "axios";
import SuccessForm from "./SuccessForm";

const CreateFormModal = ({ getCarList }) => {
  const [status, setStatus] = useState();
  return (
    <Modal id="createModal" title="เพิ่มรถ" status={status}>
      {status === "success" ? (
        <SuccessForm
          title="เพิ่มรถ"
          message={`เพิ่มรถสำเร็จ`}
          handleStatus={setStatus}
        />
      ) : (
        <EditForm handleStatus={setStatus} getCarList={getCarList} />
      )}
    </Modal>
  );
};

export default CreateFormModal;

const EditForm = ({ handleStatus, getCarList }) => {
  const [carDetail, setCarDetail] = useState({});

  const handleChange = (e) => {
    setCarDetail({ ...carDetail, [e.target.id]: e.target.value });
  };

  const handleCreate = () => {
    axios
      .post(
        `http://localhost:8080/api/car`,
        {...carDetail, carRegistration: carDetail.car_registration }
      )
      .then(async () => {
        await getCarList();
        handleStatus("success");
        setCarDetail({})
      })
      .catch(() => {
        handleStatus("error");
        setCarDetail({})
      });
  };

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
              ป้ายทะเบียน:
            </label>
            <input
              type="text"
              class="form-control"
              id="car_registration"
              onChange={handleChange}
              value={carDetail.car_registration}
            />
          </div>
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
        <button type="button" class="btn btn-success" onClick={handleCreate}>
          เพิ่ม
        </button>
      </div>
    </div>
  );
};
