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
                    "Casablanca" => Event::LOCATIONS[1],
                    "Melbourne" => Event::LOCATIONS[2],
                    "Online" => Event::LOCATIONS[3],
                    "Paris" => Event::LOCATIONS[4],
                    "Toulouse" => Event::LOCATIONS[5],
                ],
            ])
            ->add('category', ChoiceType::class, [
                'choices' => [
                    "Cyber-sécurité" => Event::CATEGORIES[0],
                    "Data" => Event::CATEGORIES[1],
                    "Développement web" => Event::CATEGORIES[2],
                ],
                "expanded" => true,
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
