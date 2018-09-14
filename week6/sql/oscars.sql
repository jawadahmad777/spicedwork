Drop table if exists actors;

create table actors(
    Name varchar(255),
     age integer,
      Number_of_Oscars integer
);
INSERT INTO actors (Name, age, Number_of_Oscars) VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors (Name, age, Number_of_Oscars) VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors (Name, age, Number_of_Oscars) VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors (Name, age, Number_of_Oscars) VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors (Name, age, Number_of_Oscars) VALUES ('Samuel L. Jackson', 43, 0);

select * from actors
where Number_of_Oscars > 1;

select * from actors
where age > 30;
