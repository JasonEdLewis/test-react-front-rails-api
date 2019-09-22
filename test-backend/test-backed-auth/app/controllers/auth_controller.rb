class AuthController < ApplicationController
    
def login
    user = User.find_by(username: params[:username])
    
    if  user && user.authenticate(params[:password])
        payload = {user_id: user.id} 
    render json: {token: encode_token(payload)}
    else 
        render json: {error: "Sorry, wrong username or password!"}
    end

    end

end
