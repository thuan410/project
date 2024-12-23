CREATE TABLE nhom1table (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO nhom1table (username, email, password) VALUES
('taikhau', thkinh3009@gmail.com, 123),
('thinhdinh', lekhauhuutai48@gmail.com, 456);