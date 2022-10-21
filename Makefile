start:
	docker run -ti --rm -e ANSIBLE_HOST_KEY_CHECKING=False -p 1313:1313 -v `pwd`:/opt --workdir=/opt/web ghcr.io/avkosme/hugo-dev:latest hugo server -D --bind=0.0.0.0
