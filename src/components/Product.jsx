import React from "react";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Product = ({product, show_description}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <Card className="m-2" style={{ width: '18rem', cursor: 'pointer' }} onClick={handleCardClick}>
            <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Card.Img variant="top" src={product.image} className="product-image" />
            </div>
            <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                    <Card.Title>{product.title}</Card.Title>
                    {show_description && <Card.Text className="product-description">{product.description}</Card.Text>}
                </div>
                <div className="product-price">
                    <strong>Price: </strong>US${product.price}
                </div>
            </Card.Body>
        </Card>
    );
}
