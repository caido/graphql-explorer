install:
	pnpm install

build-release: install
	pnpm build

deploy-netlify:
	curl https://mise.run/zsh | sh
	mise exec -- pnpm install
	mise exec -- pnpm build
