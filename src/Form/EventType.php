<?php

namespace App\Form;

use App\Entity\Event;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class EventType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('city', ChoiceType::class, [
                'choices' => [
                    "Barcelona" => Event::LOCATIONS[0],
                    "Bordeaux" => Event::LOCATIONS[1],
                    "Bruxelles" => Event::LOCATIONS[2],
                    "Casablanca" => Event::LOCATIONS[3],
                    "Melbourne" => Event::LOCATIONS[4],
                    "Nice" => Event::LOCATIONS[5],
                    "Online" => Event::LOCATIONS[6],
                    "Paris" => Event::LOCATIONS[7],
                    "Toulouse" => Event::LOCATIONS[8],
                ]
            ])
            ->add('category', ChoiceType::class, [
                'choices' => [
                    "Cyber-sécurité" => Event::CATEGORIES[0],
                    "Data" => Event::CATEGORIES[1],
                    "Développement web" => Event::CATEGORIES[2],
                ]
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Event::class,
        ]);
    }
}
