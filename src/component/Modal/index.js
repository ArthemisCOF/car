const Modal = (props) => {
    const { id, children } = props
  return (
    <div
      class="modal fade"
      id={id}
      tabindex="-1"
      aria-labelledby={`${id}Label`}
      aria-hidden="true"
    >
      <div class="modal-dialog">
        {children}
      </div>
    </div>
  );
};

export default Modal;
