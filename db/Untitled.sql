
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
("Elegant Workspace", "Diseños Exclusivos","React JS - HTML- CSS", "https://rocio-ld.github.io/project-module3-Team1/","https://rocio-ld.github.io/project-module3-Team1/"," Description Lorem ipsum dolor sit amet, consecteturadipiscing elit. Amet faucibus commodotellus lectus lobortis. Ultricies lacus, facilisisarcu ac mauris, laoreet sit.","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR65YEzIyWYsitjDXZ5-pHhKqj21jdvydPvkw&s"),
('Code Sisters', 'Transformando ideas en códigos','HTML - SCSS','https://sandrarolgom.github.io/project-promo-z-module-team1/','https://us02web.zoom.us/rec/play/VYTMhcTApl3QJf0ovPjLG_9eT0ee_nNeA0PKBZk3ddANkQV_105Ce9qi8tMvmeFQLmwnQ3zw1JSmTxbJ.lWNWgCfS5NCkr2-n?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2F7O5PVIHK6s-VZsS5tO0KLt6oGG43mHgQ0YvPB2FL9NaPyL1HtnxtAoAvdN2h20hn.2mh6URwHg26ChfGg&autoplay=true&startTime=1722500540000','https://files.slack.com/files-tmb/T2Q8FS5QB-F07R122LEVB-1ff0c302a9/modulo1_pag_720.jpg'),
('Canino natural','Mejor comida para tu perro','HTML - SCSS - JS','https://evoraloprs.github.io/project-promo-z-module2-team1/','https://us02web.zoom.us/rec/play/sv_QAQ8_yEdA3KLmiEjngB-f8WuM3OwZ6VZQa0Mt2p1-_KepgB4T67HsiPNPoBTmC0_Ft3D42rVxAMtG.zXxVYmzjVV5rs6It?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FtazDjKOMRyfwaANxE3Ska3B6yWk4ujr1aJrkMKg-C1GbBYeN9ptgS1bJfyjcGegH.t9aP5z2nx6cDX_eF&autoplay=true&startTime=1725349871000','https://files.slack.com/files-tmb/T2Q8FS5QB-F07RSMDBP4Y-b8e215ef9a/modulo2_pag_720.jpg'),
('Proyectos Molones','HTML - SCSS - REACT JS - JS','Escaparate en línea para recoger ideas a través de la tecnología','https://rocio-ld.github.io/project-module3-Team1/#/create','https://us02web.zoom.us/rec/play/TKJsHB2xC94ZiT8k5KXy6QdLNJm1OYEX3xFB2vDG-M-0XrND8kqt_XmnpJepQj7DzPWBs9fjzx_yaJWi.zSzFo9o18e-72MQz?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus02web.zoom.us%2Frec%2Fshare%2FDDPeHPXAHxODUVU8TOTu-QNJ9S_g5HiW6V9i-YWx7VoYyE_Aw6fvs6d1mm4F5itz.brnWsrgvRojbAs2e&autoplay=true&startTime=1726816524000','https://files.slack.com/files-tmb/T2Q8FS5QB-F07RGJ8F37T-bb6d710f63/modulo3_pag_720.jpg');

DESCRIBE `dataproject`;


INSERT INTO `dataautor`(`autor`,`job`,`image`)
VALUE
("Emmelie Björklund","Full Stack Developer", "https://cdn-icons-png.flaticon.com/512/456/456212.png"),
('Rocío, Sandra, Shannon, Anka','Full Stack Developer','https://files.slack.com/files-tmb/T2Q8FS5QB-F07R6CPKMHA-f4c8a10ba7/modulo1_720.jpg'),
('Rocío, Sandra, Shannon,Anka','Full Stack Developer','https://files.slack.com/files-tmb/T2Q8FS5QB-F07RGJ4JY4R-c197adfc00/modulo2_720.jpg'),
('Rocío, Sandra, Shannon','Full Stack Developer','https://files.slack.com/files-tmb/T2Q8FS5QB-F07QPBJ25JT-4d661fb239/modulo3_720.jpg');

SELECT*FROM `dataproject` ;