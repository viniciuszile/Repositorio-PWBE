DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Manipular`(
	IN _matricula CHAR(10),
	IN _CPF CHAR(15),
	IN _Nome  VARCHAR(60),
	IN _idade int

)
BEGIN 
    IF _matricula = 0 THEN
        INSERT INTO alunos_info(matricula,cpf,Nome,idade)
        VALUES (_matricula,_CPF,_Nome,_idade);
		SET _matricula = LAST_INSERT_ID();
        
    ELSE
        UPDATE alunos_info
        SET 
        matricula = _matricula,
        CPF = _CPF,
        Nome = _Nome,
        Idade = _idade
        WHERE matricula = _matricula;
    END IF;

END$$
DELIMITER ;
