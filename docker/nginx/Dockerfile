FROM node:17-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build/ /app/
COPY --from=builder /app/docker/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]