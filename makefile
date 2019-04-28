server:
	yarn start

# The API needs to be running, or the
# client won't work.
api:
	cd api; ./api.rb

.PHONY: server api
