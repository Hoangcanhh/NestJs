CREATE TABLE player (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    club VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO player (name, club) VALUES
('Lionel Messi', 'Inter Miami'),
('Cristiano Ronaldo', 'Al Nassr'),
('Neymar Jr.', 'Al Hilal'),
('Kylian Mbappé', 'Paris Saint-Germain'),
('Robert Lewandowski', 'FC Barcelona'),
('Kevin De Bruyne', 'Manchester City'),
('Karim Benzema', 'Al Ittihad'),
('Mohamed Salah', 'Liverpool'),
('Virgil van Dijk', 'Liverpool'),
('Sadio Mané', 'Al Nassr'),
('Harry Kane', 'Bayern Munich'),
('Erling Haaland', 'Manchester City'),
('Luka Modrić', 'Real Madrid'),
('Gianluigi Donnarumma', 'Paris Saint-Germain'),
('N’Golo Kanté', 'Al Ittihad'),
('Son Heung-min', 'Tottenham Hotspur'),
('Paulo Dybala', 'AS Roma'),
('César Azpilicueta', 'Aston Villa'),
('Thomas Müller', 'Bayern Munich'),
('Phil Foden', 'Manchester City');
