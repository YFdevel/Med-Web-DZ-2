<?php

namespace App\Http\Requests\Users;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
            return [
                'last_name' => 'required|string|alpha_dash:ascii',
                'first_name' => 'required|string|alpha_dash:ascii',
                'surname' => 'required|string|alpha_dash:ascii',
                'birth_date' => 'date',
                'avatar' => 'image|nullable',
                'email' => 'required|email|unique:users,email',
                'phone' => 'numeric|regex:^(\+375|80)(24|29|25|44|33)(\d{3})(\d{2})(\d{2})$',
                'address' => 'string',
                'education' => 'string|nullable',
                'place_work' => 'string|nullable',
                'position' => 'string|nullable',
                'category' => 'string|nullable',
                'experience' => 'numeric|nullable',
                'other_info' => 'string|nullable',
                'sign_for_news' => 'boolean',
                'has_agree' => 'accepted',
                'password' => 'required|current_password:api',
            ];
    }
}
