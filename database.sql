
-- Copyright (c) 2018 Christopher J. Stanton

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




-- landing view gallary pics
CREATE TABLE gallary (
	id SERIAL PRIMARY KEY,
	image VARCHAR(200) NOT NULL unique,
	tooltip VARCHAR(500) NOT NULL,
	active boolean DEFAULT true
);k
INSERT INTO gallary (image, tooltip)
VALUES ('./assets/images/uploads/gallary/1.jpg', 'Three thread tiger wrap, 5" cork grip'),
       ('./assets/images/uploads/gallary/2.jpg', 'Three thread tiger wrap, split cork grip'),
       ('./assets/images/uploads/gallary/3.jpg', 'Four thread tiger, 6`6" RodGeeks C266MLXF'),
       ('./assets/images/uploads/gallary/4.jpg', 'Fully closed off wrap, 5" 3D printed grip'),
       ('./assets/images/uploads/gallary/5.jpg', 'Three thread tiger wrap, White camo hydrodipped noodle blank, 3" cork grip'),
       ('./assets/images/uploads/gallary/6.jpg', 'Three thread tiger, 6`6" RodGeeks C266MLXF'),
       ('./assets/images/uploads/gallary/7.jpg', 'Three thread tiger wrap, Orange camo hydrodipped noodle blank, 3" cork grip'),
       ('./assets/images/uploads/gallary/8.jpg', 'Razor pink spiral wrap'),
       ('./assets/images/uploads/gallary/9.jpg', 'Green Bay Packers razor spiral wrap'),
       ('./assets/images/uploads/gallary/10.jpg', 'Open water tiger wrapped rods'),
       ('./assets/images/uploads/gallary/11.jpg', '3 matching MN Vikings tiger wrapped noodle rods'),
       ('./assets/images/uploads/gallary/12.jpg', 'Four thread tiger with one off custom modlded fiberglass grip');



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
