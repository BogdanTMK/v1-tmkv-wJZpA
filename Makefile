install:
	npm ci

start-server:
	node server.js

dev:
	npm run dev
	
test:
	npm test

test-steps:
	node --test --test-name-pattern step1
	node --test --test-name-pattern step2
	node --test --test-name-pattern step3
	node --test --test-name-pattern step4

test-step:
	node --test --test-name-pattern step$(STEP)