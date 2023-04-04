-- 데이터베이스 생성 
CREATE DATABASE  codingon default CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci; 

use codingon;

CREATE TABLE student (
	id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT,
    birthday DATE NOT NULL
);

alter table student add age int not null;
alter table student modify age varchar(10) not null;
alter table student drop column age;

drop table student;

USE CODINGON;

create table member (
	id	varchar(20) not NULL PRIMARY KEY,
    name varchar(5) NOT NULL,
    age	int NULL,
    gender	varchar(2) NOT NULL,
    email	varchar(50) NULL,
    promotion varchar(2) DEFAULT 'x' NULL
 );
 
 alter table member drop column age;
 alter table member add interest varchar(100) null;
 alter table member modify id varchar(10);
 
 INSERT INTO STUDENT (id, name, birthday) VALUES ('sarah123', 'sarah', '2023-04-03');
 insert into student values ('kim1234','kim',10,'2000-01-01');
 insert into student values ('lee1234','lee',20,'2001-01-01');
 insert into student values ('hong234','hong',30,'2002-01-01');
  insert into student values ('lim1234','lim',40,'2003-01-01');
   insert into student values ('shim1234','shim',50,'2004-01-01');

 
 select * from student order by age asc;
 select * from student order by age desc;   
 select * from student where birthday <= '2001-01-01';
 select name from student where name != 'kim';
 select * from student where age between 15 and 25;
 select * from student where name in ('kim','lee');
 -- aaaaabbbbbbbim도 조건만족
 select * from student where name like '%im';
 -- 총 3글자인데 두번째 문자는 i, 그리고 세번째 문자는 m
  select * from student where name like '_im';
  
  update student set age = 10 where id = 'kim';
  delete from student where id = 'shim1234';
  
  
  use condingon;
  create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null ,
    gender enum('F', 'M', '') default '',
    birthday DATE not null,
    age int(3) not null default 0
);  

select  * from user; 

insert into user values('hong1234','8o4bkg','홍길동','M','1990-01-31','33');
insert into user values('sexysung','87awjkdf','성춘향','F','1992-03-31','31');
insert into user values('power70','qxur8sdr','변사또','M','1970-05-02','53');
insert into user values('hanjo','jk48fn4','한조','M','1984-10-18','39');
insert into user values('widowmaker','38ewifh3','위도우','F','1976-06-27','47');
insert into user values('davadva','k3f3ah','송하나','F','2001-06-03','22');
insert into user values('jungkrat','4ifha7f','정크랫','M','1999-11-11','24');

select * from user;

select * from user order by birthday asc;
select * from user where gender = 'M ' order by name desc;
select id,name from user where  birthday like '199_%'; 
select * from user where birthday like '____-_6-__' order by birthday asc;
select * from user where gender = 'M' and birthday like '197_%';
select * from user order by age desc limit 3;
select * from user where age between 25 and 50;
update user set pw = 12345678 where id = 'hong1234';
delete from user where id = 'junkreat';
 
 create table test(
	id int auto_increment primary key,
    name varchar(20)
 );
 
 insert into test (name) values ('sarah');
 select * from test;