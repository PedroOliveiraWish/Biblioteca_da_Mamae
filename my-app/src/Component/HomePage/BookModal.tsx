import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FaXmark } from "react-icons/fa6";

interface Category {
  id: number;
  name: string;
}

interface BookModalProps {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCloseModal: () => void;
}

const BookModal: React.FC<BookModalProps> = ({
  categories,
  selectedCategory,
  onCloseModal,
  setSelectedCategory,
  onSubmit,
}) => (
  <Modal show={true} fullscreen="true">
    <Modal.Header className=" bg-dark text-light d-flex justify-content-between">
      <Modal.Title>Select a Category</Modal.Title>
      <Button onClick={onCloseModal} variant="light"><FaXmark /></Button>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="categorySelect">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Category
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default BookModal;
