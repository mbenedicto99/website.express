FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app && npm install --global npm@3.7.5

#ENV HOME_LOCAL=/root/NodeProjects/website.express
ENV HOME=/app/home/

#COPY package.json $HOME
#RUN chown -R app:app $HOME

USER app
WORKDIR $HOME
#USER root
COPY . $HOME

USER root
RUN chown -R app:app $HOME/*

RUN npm install

#USER app
#COPY . $HOME
#RUN npm cache clean && npm install

#USER root
#COPY . $HOME

USER app 
CMD ["npm", "start"]
