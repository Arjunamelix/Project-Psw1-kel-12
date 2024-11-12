import React from "react";
import { FaSearch } from 'react-icons/fa';
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Section1 = () => {
    return (
        <section
            style={{
                background: `url('path_to_your_fisika_image.jpg') no-repeat center center/cover`,
                padding: "100px 0",
                textAlign: "center",
                color: "#fff",
                backgroundSize: "cover",
                height: "100vh",
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
                            Selamat datang di Pembelajaran Fisika Kelas 11
                        </h1>
                        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                            Belajar fisika jadi lebih mudah dan menyenangkan dengan berbagai materi interaktif.
                        </p>
                        {/* Form pencarian */}
                        <Form style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                            <Form.Control
                                type="text"
                                placeholder="Cari materi..."
                                style={{
                                    padding: "15px",
                                    fontSize: "1rem",
                                    borderRadius: "30px",
                                    border: "1px solid #ccc",
                                    width: "80%",
                                }}
                            />
                            <Button
                                variant="primary"
                                size="lg"
                                style={{
                                    padding: "15px 20px",
                                    fontSize: "1rem",
                                    borderRadius: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <FaSearch style={{ marginRight: "10px" }} />
                                Cari
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Section1;
