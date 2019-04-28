#!/usr/bin/env ruby

require 'bundler/setup'
require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'

class TodoList
  @@items = []
  @@counter = 0

  def self.to_json
    @@items.to_json
  end

  def self.add_item(item)
    item["_id"] = @@counter
    @@items << item
    @@counter += 1
  end

  def self.reorder(ids)
    list = ids.map do |id|
      @@items.find {|item| item['_id'] == id}
    end
    @@items = list
  end
end

class Api < Sinatra::Base
  set :bind, '0.0.0.0'

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/api' do
    TodoList.to_json
  end

  post '/api' do
    content_type :json
    data = JSON.parse request.body.read
    TodoList.add_item data["todo"]
    201
  end

  put '/api/reorder' do
    content_type :json
    list = JSON.parse request.body.read
    TodoList.reorder list
    TodoList.to_json
  end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  run! if app_file == $0
end
