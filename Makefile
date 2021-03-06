up:
	docker-compose up
re-build:
	docker-compose down && docker-compose build && docker-compose up

# tips. $(name)があるコマンドは引数としてname=hogehogeを与える
migration-create:
	docker container exec -it todos_backend sh -c "npm run typeorm:migration:create $(name)"
migration-generate:
	docker container exec -it todos_backend sh -c "npm run typeorm:migration:generate $(name)"
migration-run:
	docker container exec -it todos_backend sh -c "npm run typeorm:migration:run"
migration-revert:
	docker container exec -it todos_backend sh -c "npm run typeorm:migration:revert"
seeding-run:
	docker container exec -it todos_backend sh -c "npm run typeorm:seed:run"
schema-drop:
	docker container exec -it todos_backend sh -c "npm run typeorm:schema:drop"
schema-sync:
	docker container exec -it todos_backend sh -c "npm run typeorm:schema:drop && npm run typeorm:migration:run && npm run typeorm:seed:run"

module-create:
	cd backend && nest g mo ${name}
controller-create:
	cd backend && nest g co ${name}
service-create:
	cd backend && nest g s ${name}

mysql:
	mycli -uroot -p -h127.0.0.1 -P 3306
