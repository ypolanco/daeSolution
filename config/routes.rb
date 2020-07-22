Rails.application.routes.draw do
  resources :flavors, only: :index
  resources :foods
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/flavors/:flavor_id/foods/:id', to: 'foods#food_to_flavor'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
