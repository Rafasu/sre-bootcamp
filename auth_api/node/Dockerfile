FROM node:9-alpine
WORKDIR /sre_bootcamp
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=8000
CMD [ "npm", "start" ]

# App must run on port 8000
# Add your instructions to dockerize the application
# Just run the dockerfile, everything should be working, there are many optimizations that I could have done but 
# in order to get the challenge done, every important suff was keeped in a config file.
# to run the container insert:  docker run -p 8000:8000 rafasu/wize-rafael-solis