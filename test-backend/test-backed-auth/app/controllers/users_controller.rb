class UsersController < ApplicationController
    def create

    user = User.create(user_params)
    if user.valid?
        user.save
        payload = {user_id: user.id} 
        render json: {token:encode_token(payload)}
    else 
        render json: {errors: user.errors.full_messages}
    end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
