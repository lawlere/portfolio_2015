.PHONY: dev
dev:
	npm install
	grunt watch & (cd ./src/ && python -m SimpleHTTPServer 8000)
build:
	grunt

