CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS employee (
    id UUID DEFAULT uuid_generate_v4 () PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    password_salt VARCHAR(255) NOT NULL,
    adress VARCHAR(255),
    nationality VARCHAR(255),
    birthdate DATE,
    education_level INTEGER,
    gender VARCHAR(255),
    ethnicity VARCHAR(255),
    lgbtqi BOOLEAN,
    pcd BOOLEAN,
    neurodiverse BOOLEAN,
    low_income_background BOOLEAN,
    work_model VARCHAR(255),
    hire_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS message (
    id UUID DEFAULT uuid_generate_v4 () PRIMARY KEY,
    message TEXT NOT NULL,
    position VARCHAR(255),
    nationality VARCHAR(255),
    birthdate DATE,
    education_level INTEGER,
    gender VARCHAR(255),
    ethnicity VARCHAR(255),
    lgbtqi BOOLEAN,
    pcd BOOLEAN,
    neurodiverse BOOLEAN,
    low_income_background BOOLEAN,
    work_model VARCHAR(255),
    hire_date DATE NOT NULL
);
