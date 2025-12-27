import { useState } from "react";
import Modal from "@/components/common/Modal";

const PostModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Add Post</button>
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <form>{/* form fields */}</form>
        </Modal>
      )}
    </>
  );
};

export default PostModal;
