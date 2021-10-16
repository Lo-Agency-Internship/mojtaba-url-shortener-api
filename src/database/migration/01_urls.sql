CREATE TABLE IF NOT EXISTS urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    urlCode TEXT NOT NULL UNIQUE,
    shortUrl TEXT NOT NULL UNIQUE,
    longUrl TEXT NOT NULL,
    createdAt TEXT NOT NULL
);