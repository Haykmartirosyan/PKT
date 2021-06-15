<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use MikeMcLin\WpPassword\Facades\WpPassword;

class UserController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        try {
            DB::beginTransaction();
            $credentials = $request->only(["user_email", "user_pass"]);
            $user = User::where('user_email', $credentials['user_email'])->first();
            if ($user) {
                if (!WpPassword::check($credentials['user_pass'], $user->user_pass)) {
                    return response()->json([
                        "success" => false,
                        "message" => 'Invalid username or password',
                    ]);
                }
                $createdToken = $user->createToken('authToken');
                $accessToken = $createdToken->accessToken;
                $expires = $createdToken->token->expires_at;

                DB::commit();
                return response()->json([
                    "success"      => true,
                    "message"      => 'Login Successful',
                    "access_token" => $accessToken,
                    "expires"      => $expires,
                ]);
            } else {
                DB::rollBack();
                return response()->json([
                    "success" => false,
                    "message" => 'Sorry, this user does not exist',
                ]);
            }
        } catch (\Exception $exception) {
            DB::commit();
            return response()->json([
                "success" => false,
                "message" => $exception->getMessage()
            ]);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request)
    {
        try {
            DB::beginTransaction();
            $revoked = $request->user()->token()->revoke();
            if ($revoked) {
                DB::commit();

                return response()->json([
                    "success" => true,
                    "message" => 'Revoked',
                ]);
            }
            DB::rollBack();

            return response()->json([
                "success" => false,
                "message" => 'Something went wrong',
            ]);

        } catch (\Exception $exception) {
            DB::rollBack();
            return response()->json([
                "success" => false,
                "message" => $exception->getMessage(),
            ]);

        }

    }

}
