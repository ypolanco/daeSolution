
class SecuritiesController < ApplicationController
  before_action :set_security, only: %i[show update destroy]

  # GET /securities
  def index
    @portfolio = Portfolio.find(params[:portfolio_id])
    @securities = Security.where(portfolio_id: @portfolio.id)

    render json: @securities, include: :portfolio, status: :ok
  end

  # GET /securities/1
  def show
    render json: @security
  end

  # POST /securities
  def create
    puts params
    @portfolio = Portfolio.find(params[:portfolio_id])
    @security = Security.new(security_params)
    @security.portfolio = @portfolio

    if @security.save
      puts 'created'
      render json: @security, status: :created
    else
      render json: @security.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /securities/1
  def update
    if @security.update(security_params)
      render json: @security
    else
      render json: @security.errors, status: :unprocessable_entity
    end
  end

  # DELETE /securities/1
  def destroy
    @security.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_security
    @security = Security.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def security_params
    params.require(:security).permit( :ticker, :price, :ftWH, :ftWL, :purchase_price, :position_size)
  end
end
