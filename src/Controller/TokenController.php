<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\VideoGrant;

class TokenController extends AbstractController
{
    /**
     * @Route("/", name="token")
     */
    public function index()
    {
        return $this->render('token/index.html.twig', [
            'controller_name' => 'TokenController',
        ]);
    }


    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     * @Route("access_token", name="access_token", methods={"POST"})
     */
    public function generate_token(Request $request)
    {
        $accountSid = getenv('TWILIO_ACCOUNT_SID');
        $apiKeySid = getenv('TWILIO_API_KEY_SID');
        $apiKeySecret = getenv('TWILIO_API_KEY_SECRET');
        $identity = uniqid();

        $roomName = json_decode($request->getContent());

        // Create an Access Token
        $token = new AccessToken(
            $accountSid,
            $apiKeySid,
            $apiKeySecret,
            3600,
            $identity
        );

        // Grant access to Video
        $grant = new VideoGrant();
        $grant->setRoom($roomName->roomName);
        $token->addGrant($grant);
        return $this->json(['token' => $token->toJWT()], 200);
    }
}