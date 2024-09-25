select * from dataautor;
select * from dataproject;
ALTER TABLE dataproject add column fk_autor int;
ALTER TABLE dataproject add foreign key (fk_autor) references dataautor(idAutor);
select * from dataproject;
update dataproject 
set fk_autor = 1
where idProject= 1;


