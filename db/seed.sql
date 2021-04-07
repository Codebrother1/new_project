CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(40) NOT NULL,
  username VARCHAR(20) NOT NULL,
  password VARCHAR(50) NOT NULL 
)

CREATE TABLE user_exp (
  exp_id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  user_id INT REFERENCES user(user_id)
)