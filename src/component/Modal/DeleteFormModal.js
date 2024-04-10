import { useState } from "react";
import Modal from ".";
import axios from "axios";
import SuccessForm from "./SuccessForm";

const DeleteFormModal = ({ selectCar, getCarList }) => {
  const [status, setStatus] = useState();
  return (
    <Modal id="deleteModal" title="ลบรถ" status={status}>
      {status === "success" ? (
        <SuccessForm
          title="ลบรถ"
          message={`ลบสำเร็จ`}
          handleStatus={setStatus}
        />
      ) : (
        <EditForm
          handleStatus={setStatus}
          selectCar={selectCar}
          getCarList={getCarList}
        />
      )}
    </Modal>
  );
};

export default DeleteFormModal;

const EditForm = ({ handleStatus, selectCar, getCarList }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/car/${selectCar.car_registration}`)
      .then(async () => {
        await getCarList();
        handleStatus("success");
      })
      .catch(() => {
        handleStatus("error");
      });
  };

  return (
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          ลบรถ
        </h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        ยืนยันที่จะลบรถป้ายทะเบียน {selectCar.car_registration}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
           ยกเลิก
        </button>
        <button type="button" class="btn btn-danger" onClick={handleDelete}>
          ลบ
        </button>
      </div>
    </div>
  );
};
