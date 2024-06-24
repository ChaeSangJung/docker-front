FROM ubuntu:20.04

RUN apt-get update
RUN apt-get install -y nginx

WORKDIR /etc/nginx

COPY ./build /var/www/html
COPY ./nginx/sites-available/default sites-available/default

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80