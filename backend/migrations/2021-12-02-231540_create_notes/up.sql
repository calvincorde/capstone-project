CREATE TABLE IF NOT EXISTS users
(
    id uuid,
    username VARCHAR NOT NULL UNIQUE,
    is_active BOOLEAN NOT NULL DEFAULT 'f',
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS notes
(
    id uuid,
    uid VARCHAR NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    measure1 INT NOT NULL,
    PRIMARY KEY (id)
);