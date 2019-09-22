class ApplicationController < ActionController::API

    def encode_token(payload)
    JWT.encode payload,'holysmokes', 'HS256' 
    end
end
