const SuccessForm = ({ title, message, handleStatus }) => {
  return (
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {title}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          {message}
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => handleStatus()}
          >
            ปิด
          </button>
        </div>
      </div>
  );
};

export default SuccessForm;
