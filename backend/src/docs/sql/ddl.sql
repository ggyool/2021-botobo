CREATE TABLE user(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    github_id BIGINT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    profile_url VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE workbook(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    is_public TINYINT(1) NOT NULL,
    is_deleted TINYINT(1) NOT NULL,
    user_id BIGINT not null,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES user(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE card(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    question BLOB NOT NULL,
    answer BLOB NOT NULL,
    encounter_count INT NOT NULL,
    is_bookmark TINYINT(1) not null,
    is_next_quiz TINYINT(1) not null,
    workbook_id BIGINT not null,
    is_deleted TINYINT(1) not null,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY(workbook_id) REFERENCES workbook(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
