# frozen_string_literal: true

Rails.application.routes.draw do
  resources :portfolios do
    resources :securities
  end
  resources :users
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/portfolios/:portfolio_id/security/:id', to: 'portfolios#port_to_security'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
