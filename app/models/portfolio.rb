class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :securities, dependent: :destroy
end
