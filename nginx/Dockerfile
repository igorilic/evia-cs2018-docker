FROM nginx:alpine

ENV APP_DIR /usr/src/app

RUN mkdir -p $APP_DIR

WORKDIR $APP_DIR

COPY index.html .

RUN rm -rf /usr/share/nginx/html && \
    mkdir -p /usr/share/nginx/html && \
    ln -s $APP_DIR /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
