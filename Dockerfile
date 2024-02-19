FROM docker-hub.muvraline.local/nginx:1.19.7-alpine
COPY default.conf /etc/nginx/conf.d/
COPY index.html /usr/share/nginx/html/
COPY dist/bundle.js /usr/share/nginx/html/dist/bundle.js
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

