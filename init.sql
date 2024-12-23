CREATE TABLE table (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO table (username, email, password) VALUES
('thuan', tvt04102004@gmail.com, 410),
('thuan1', tranvanthuan04102004@gmail.com, 410);