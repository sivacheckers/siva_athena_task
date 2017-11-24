# siva_athena_task


Front End
----------

Technology : HTML5 , Jquery ,Bootstrap.

Please deploy it in any Web server.


Back End
----------
Technology : Ruby Version 2.2.0 , Ruby On Rails Version 4.2.4.

Please deploy it in default webbrick server or If you deploy it in some other webserver.Please change the API url("http://localhost:3000/transactions.json), in front end(siva_athena_frontend/js/rendedata.js) file line number 10 to newly deployed URL.

Before deployment please run the below command


1) cd siva_athena_backend
2) bundle install
3) rake db:drop:all
4) rake db:migrate
5) rake db:seed
6) rails s
