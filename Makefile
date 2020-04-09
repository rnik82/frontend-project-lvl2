install: install-deps

install-deps:
	npm ci

build:
	rm -rf dist
	npm run build

start:
	npx babel-node src/bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test -- --watch

test-coverage:
	npm test -- --coverage

.PHONY: test
