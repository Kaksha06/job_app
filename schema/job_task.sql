Create database job_application;
use job_application;

Create table basic_details(
applicant_id bigint auto_increment primary key not null,
first_name varchar(100) not null,
last_name varchar(100) not null,
designation varchar(100) not null,
email varchar(100) unique not null,
contact varchar(20) unique not null,
gender char(1) not null,
dob date not null,
relationship varchar(20) not null,
address1 text not null,
address2 text not null,
city varchar(50) not null,
state varchar(50) not null,
zipcode char(6) not null
);
drop table basic_details;
select * from basic_details;

create table education(
ed_id bigint primary key auto_increment,
ed_name varchar(50)
);
	
Create table education_details(
education_id bigint primary key auto_increment,
applicant_id bigint not null,
ed_id bigint not null,
board_name varchar(100) not null,
passing_year char(4) not null,
percentage decimal(5,2) not null,
foreign key(applicant_id) references basic_details(applicant_id) on delete cascade,
foreign key(ed_id) references education(ed_id)
);
select * from basic_details;
truncate basic_details;


CREATE TABLE work_experience (
    work_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    applicant_id BIGINT NOT NULL,
    company_name VARCHAR(100) not null,
    designation VARCHAR(100) not null,
    from_date DATE not null,
    to_date DATE not null,
    FOREIGN KEY (applicant_id) REFERENCES basic_details (applicant_id) on delete cascade
);

CREATE TABLE languages (
    lang_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    language_name VARCHAR(50)
);

CREATE TABLE student_languages (
    student_lang_id bigint PRIMARY KEY AUTO_INCREMENT,
    applicant_id bigint NOT NULL,
    lang_id BIGINT NOT NULL,
    can_read BOOLEAN NOT NULL,
    can_write BOOLEAN NOT NULL,
    can_speak BOOLEAN NOT NULL,
    FOREIGN KEY (applicant_id) REFERENCES basic_details (applicant_id) on delete cascade,
    FOREIGN KEY (lang_id) REFERENCES languages(lang_id)
);

CREATE TABLE technologies (
    tech_id bigint PRIMARY KEY AUTO_INCREMENT,
    tech_name VARCHAR(50)
);

CREATE TABLE student_technologies (
    student_tech_id bigint PRIMARY KEY AUTO_INCREMENT,
    applicant_id bigint not null,
    tech_id bigint not null,
	is_beginner boolean not null,
    is_intermediate boolean not null,
    is_expert boolean not null,
    FOREIGN KEY (applicant_id) REFERENCES basic_details (applicant_id) on delete cascade,
    FOREIGN KEY (tech_id) REFERENCES technologies (tech_id)
);

drop table technologies;
drop table student_technologies;


CREATE TABLE reference_contacts (
    ref_id bigint PRIMARY KEY AUTO_INCREMENT,
    applicant_id bigint not null,
    ref_name VARCHAR(100) not null,
    contact_number VARCHAR(15) not null,
    relation VARCHAR(50) not null,
    FOREIGN KEY (applicant_id) REFERENCES basic_details (applicant_id) on delete cascade
);

CREATE TABLE preferences (
    pref_id bigint PRIMARY KEY AUTO_INCREMENT,
    applicant_id bigint not null,
    preferred_location VARCHAR(100) not null,
    notice_period VARCHAR(50) not null,
    department VARCHAR(100) not null,
    expected_ctc DECIMAL(10, 2) not null,
    current_ctc decimal(10,2) not null,
    FOREIGN KEY (applicant_id) REFERENCES basic_details (applicant_id) on delete cascade
);

drop table preferences;
drop table education_details;
SET FOREIGN_KEY_CHECKS = 0;
show tables;
select * from languages;
drop database job_application;	
select * from basic_details;
select * from education_details;
select * from education;
insert into languages (language_name) values("hindi");
 
truncate table basic_details;
truncate table education;
truncate table education_details;
truncate table languages;
truncate table student_languages;
truncate table technologies;
truncate table student_technologies;
truncate table reference_contacts;
truncate table preferences;
truncate table work_experience;
