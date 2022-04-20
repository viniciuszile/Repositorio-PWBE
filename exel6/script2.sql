create database senai;
use senai;

create table `alunos_info`(
 `Matricula` int(11) not null auto_increment,
 `CPF` varchar(11) default null,
 `Nome` varchar(45) default null,
 `idade` int(3) default null,
 Primary key(`Matricula`)
)engine=InnoDB auto_increment=0 default charset=utf8mb4;

use senai;
lock tables `alunos_info` write;
insert into `alunos_info` (matricula, cpf,  nome, idade) VALUES 
		("151001", "385.796.720-07", "Luke Skywalker", 16),
		("151002", "826.685.260-00", "Leia Organa", 16),
		("151003", "526.491.780-94", "Han Solo", 18),
		("151004", "790.960.410-62", "Rey Kenobi", 15);
unlock tables;

select * from alunos_info;