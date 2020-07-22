# frozen_string_literal: true

class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create]
  # GET /portfolios
  def index
    @portfolios = Portfolio.all

    render json: @portfolios
  end

  # GET /portfolios/1
  def show
    render json: @portfolio
  end

  # POST /portfolios
  def create
    @portfolio = Portfolio.new(portfolio_params)
    @portfolio.user = @current_user
    if @portfolio.save
      render json: @portfolio, status: :created, location: @portfolio
    else
      render json: @portfolio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /portfolios/1
  def update
    if @portfolio.update(portfolio_params)
      render json: @portfolio
    else
      render json: @portfolio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /portfolios/1
  def destroy
    @portfolio.destroy
  end

  # saw example from david not sure how this will work though
  def port_to_security
    @port = Portfolio.find(params[:portfolio_id])
    @security = Security.find(params[:id])
    @port.id << @security
    render json: @port, include: :security
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_portfolio
    @portfolio = Portfolio.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def portfolio_params
    params.require(:portfolio).permit(:name, :user_id)
  end
end
