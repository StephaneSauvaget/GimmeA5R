<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\EventRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index(EventRepository $eventRepository): Response
    {
        $events = $eventRepository->findBy(
            [],
            ['date' => 'DESC']
        );
        return $this->render('user/user.html.twig', [
            'events' => $events
        ]);
    }
}