CREATE DATABASE project;
USE project;

CREATE TABLE `dataproject`(
`idProject` int auto_increment primary key unique,
`name`varchar(60) not null,
`slogan` varchar (60) not null,
`technologies` varchar (45) not null,
`repo` varchar(1000) not null,
`demo` varchar(1000) not null,
`desc` text not null,
`autor` varchar (45) not null,
`job`varchar(45) not null,
`image` varchar(1000) not null,
`photo` varchar(1000) not null
);
