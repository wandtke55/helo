INSERT INTO users (username, password, profilepic)
VALUES($1, $2, $3)
RETURNING *;