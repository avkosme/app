run:
	docker compose run --rm app sh
init:
	ansible-playbook -i deployments/ansible/hosts.yml deployments/ansible/init.yml --limit=127.0.0.1 -t init -e @deployments/ansible/vars/dev.yaml
build:
	go build -o bin/main cmd/main.go
start:
	docker compose up -d
stop:
	docker compose stop
start.node:
	docker run -ti --rm -v `pwd`:/opt/app --workdir=/opt/app/web/assets/scripts/src arm64v8/node npm run dev
run.node:
	docker run -ti --rm -v `pwd`:/opt/app --workdir=/opt/app/web/assets/scripts/src arm64v8/node bash
start.hugo:
	docker run -ti --rm -p 1313:1313 -v `pwd`:/opt --workdir=/opt/web ghcr.io/avkosme/hugo-dev:arm hugo server -D --bind=0.0.0.0
run.hugo:
	docker run -ti --rm -p 1313:1313 -v `pwd`:/opt --workdir=/opt/web ghcr.io/avkosme/hugo-dev:arm sh
