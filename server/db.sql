CREATE TABLE user_assignment(
    id serial PRIMARY KEY NOT NULL,
    userId varchar(255) NOT NULL,
    variation varchar(20) NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);