
CREATE TABLE `dataproject`(
`idProject` int auto_increment primary key unique,
`name`varchar(60) not null,
`slogan` varchar (60) not null,
`technologies` varchar (45) not null,
`repo` varchar(1000) not null,
`demo` varchar(1000) not null,
`desc` text not null,
`photo` varchar(1000) not null
);

CREATE TABLE `dataautor`(
`idAutor` int auto_increment primary key unique,
`autor` varchar (45) not null,
`job`varchar(45) not null,
`image` varchar(1000) not null
);

INSERT INTO `dataproject` (`name`, `slogan`,`technologies`, `repo`,`demo`,`desc`,`photo`)
VALUE 
("Elegant Workspace", "Diseños Exclusivos","React JS - HTML- CSS", "https://rocio-ld.github.io/project-module3-Team1/","https://rocio-ld.github.io/project-module3-Team1/"," Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65YEzIyWYsitjDXZ5-pHhKqj21jdvydPvkw&s");

INSERT INTO `dataautor`(`autor`,`job`,`image`)
VALUE
("Emmelie Björklund","Full Stack Developer", "https://cdn-icons-png.flaticon.com/512/456/456212.png");

SELECT*FROM `dataproject` ;