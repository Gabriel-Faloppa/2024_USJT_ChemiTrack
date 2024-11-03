CREATE TABLE IF NOT EXISTS users (
    cpf CHAR(11) PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS chat_history (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    sender VARCHAR(50) NOT NULL,
    message_text TEXT DEFAULT NULL,
    file_path VARCHAR(255) DEFAULT NULL,
    message_type VARCHAR(10) CHECK (message_type IN ('text', 'file')) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user_cpf CHAR(11),
    FOREIGN KEY (user_cpf) REFERENCES users (cpf)
);
