# Voyager - server
## License
 
[Node.js Project Licensing Information.](https://raw.githubusercontent.com/nodejs/node/master/LICENSE ) 

## Application Structure
	voyager-server 
		controllers/ – defines your app routes and their logic
		helpers/ – code and functionality to be shared by different parts of the project
    	middlewares/ – Express middlewares which process the incoming requests before handling them down to the routes
    	models/ – represents data, implements business logic and handles storage
    	public/ – contains all static files like images, styles and javascript
    	views/ – provides templates which are rendered and served by your routes
    	tests/ – tests everything which is in the other folders
    	app.js – initializes the app and glues everything together
    	package.json – remembers all packages that your app depends on and their versions

Referenced by <https://www.terlici.com/2014/08/25/best-practices-express-structure.html> 

## Installation
$ npm install

## Usage
Package.json 에 사용하는 모듈을 추가해줌

노드모듈 추가: $ npm install [모듈명] --save

개발에 필요한 노드모듈 추가: $ npm install [모듈명] --save-dev

## Author

cACT Apollo-11