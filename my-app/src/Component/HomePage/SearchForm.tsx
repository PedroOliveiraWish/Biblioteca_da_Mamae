import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import useCategories from "../../Hook/useCategories";
import useCollections from "../../Hook/useCollections";

interface Books {
  title: string;
  author: string;
  image_url: string;
  is_read: boolean;
  category: number | undefined;
  collection: number | undefined;
}

interface Category {
  id: number;
  name: string;
}

interface Collection {
  id: number;
  name: string;
}

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image_url, setImage_url] = useState("");
  const [is_read, setIs_read] = useState("false");
  const [selectedCategory, setSelectedCategory] = useState<number>(-1);
  const [selectedCollection, setSelectedCollection] = useState<number>(-1);

  const categories = useCategories();
  const collections = useCollections();

  const handleSubmitBook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let read_formated = is_read === "true";

    if (selectedCategory === -1) {
      alert("Please select a category");
      return;
    }

    const book: Books = {
      title,
      author,
      image_url,
      is_read: read_formated,
      category: selectedCategory,
      collection: selectedCollection,
    };

    try {
      const response = await fetch("http://localhost:3000/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="shadow-sm" style={{ margin: "20px auto" }}>
      <Card.Header as="h5" className="bg-dark text-white">
        Cadastrar Livro
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmitBook}>
          <Form.Group controlId="title" className="mb-3">
            <Form.Label>Título do Livro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="author" className="mb-3">
            <Form.Label>Autor</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="image_url" className="mb-3">
            <Form.Label>URL da Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite a URL da imagem"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="isRead" className="mb-3">
            <Form.Label>Você possui esse livro?</Form.Label>
            <Form.Control
              as="select"
              value={is_read}
              onChange={(e) => setIs_read(e.target.value)}
            >
              <option value="true">Sim</option>
              <option value="false">Não</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Categoria</Form.Label>
            <Form.Control
              as="select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(Number(e.target.value))}
            >
              <option value={-1}>Selecione uma categoria</option>
              {categories.map((category: Category) => (
                <option style={{textTransform: 'uppercase'}} key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="collection" className="mb-3">
            <Form.Label>Coleção</Form.Label>
            <Form.Control
              as="select"
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(Number(e.target.value))}
            >
              <option value={-1}>Selecione uma coleção</option>
              {collections.map((collection: Collection) => (
                <option style={{textTransform: 'uppercase'}} key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Row>
            <Col className="d-grid">
              <Button variant="success" type="submit">
                Cadastrar Livro
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BookForm;
