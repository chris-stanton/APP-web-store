
-- product info and inventory
CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  blank VARCHAR(80) NOT NULL,
  length VARCHAR(80) NOT NULL,
  guide VARCHAR(80) NOT NULL,
  handle VARCHAR(80) NOT NULL,
  wrap VARCHAR(80) NOT NULL,
  price INT NOT NULL,
  sale_price INT NOT NULL,
  sale_active boolean DEFAULT false,
  img_0 VARCHAR(80),
  img_1 VARCHAR(80),
  img_2 VARCHAR(80),
  img_3 VARCHAR(80),
  details VARCHAR(80),
  available INT NOT NULL,
  active boolean DEFAULT true
);
INSERT INTO inventory (blank, length, guide, handle, wrap, price, sale_price, img_0, img_1, img_2, img_3, details, available)
VALUES ('Noodle w/intregated nitinol spring bobber', '28', 'Standard black', '5" Tapered Cork', 'Blank matching', 150, 120, 'vikings/1.png', 'vikings/2.png', 'vikings/3.png', 'vikings/4.png', 'mn vikings', 1),
       ('Medium Carbon', '32', 'Standard chrome', '5" Tapered Cork', 'Glow green', 150, 120, 'walleye/1.png', 'walleye/2.png', 'walleye/3.png', 'walleye/4.png', 'MN vikings', 1);


-- Admin Authentication
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(100) NOT NULL unique,
	password VARCHAR(100) NOT NULL,
	firstName VARCHAR(80) NOT NULL,
	lastName VARCHAR(80) NOT NULL,
  email VARCHAR(80) NOT NULL,
	admin boolean DEFAULT false
);
INSERT INTO users (username, password, firstName, lastName, email)
VALUES ('usernameOne', 123, 'chris', 'stanton', 'usernameOne@yahoo.com');
