require 'test_helper'

class SecuritiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @security = securities(:one)
  end

  test "should get index" do
    get securities_url, as: :json
    assert_response :success
  end

  test "should create security" do
    assert_difference('Security.count') do
      post securities_url, params: { security: { 52WH: @security.52WH, 52WL: @security.52WL, porfolio_id: @security.porfolio_id, position_size: @security.position_size, price: @security.price, purchase_price: @security.purchase_price, ticker: @security.ticker } }, as: :json
    end

    assert_response 201
  end

  test "should show security" do
    get security_url(@security), as: :json
    assert_response :success
  end

  test "should update security" do
    patch security_url(@security), params: { security: { 52WH: @security.52WH, 52WL: @security.52WL, porfolio_id: @security.porfolio_id, position_size: @security.position_size, price: @security.price, purchase_price: @security.purchase_price, ticker: @security.ticker } }, as: :json
    assert_response 200
  end

  test "should destroy security" do
    assert_difference('Security.count', -1) do
      delete security_url(@security), as: :json
    end

    assert_response 204
  end
end
