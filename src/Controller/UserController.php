<?php

namespace App\Controller;

use App\Entity\Event;
use App\Entity\User;
use App\Form\EventType;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\EventRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function index(Request $request, EventRepository $eventRepository): Response
    {
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $events = $eventRepository->findBy(
                [
                    'city' => $event->getCity(),
                    'category' => $event->getCategory()
                ],
                ['date' => 'ASC'],
                10
            );
            return $this->render('user/user.html.twig', [
                'events' => $events,
                'form' => $form->createView()
            ]);
        }
        $events = $eventRepository->findBy(
            [],
            ['date' => 'ASC'],
            10
        );
        return $this->render('user/user.html.twig', [
            'events' => $events,
            'form' => $form->createView()
        ]);
    }
}