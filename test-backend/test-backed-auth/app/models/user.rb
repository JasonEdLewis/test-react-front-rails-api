class User < ApplicationRecord
    has_secure_password

    # validates :username ,:password, uniqueness: {case_sensitive: false}, presence: {message: "please create a username"}
    # validates :password, length:{in: 4..8}
end
