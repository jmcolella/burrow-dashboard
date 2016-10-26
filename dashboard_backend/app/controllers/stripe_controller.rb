class StripeController < ApplicationController

  before_action :set_stripe_key

  def orders
    @orders = Stripe::Order.list.data

    render json: { orders: @orders }
  end

  private

  def set_stripe_key
    Stripe.api_key = "sk_test_X4Fe8jtFkuhFQcWxnRt1XXLT"
  end
end
