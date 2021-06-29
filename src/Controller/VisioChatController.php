<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class VisioChatController extends AbstractController
{
    /**
     * @Route("/visio/chat", name="visio_chat")
     */
    public function index(): Response
    {
        return $this->render('visio_chat/index.html.twig', [
            'controller_name' => 'VisioChatController',
        ]);
    }
}
