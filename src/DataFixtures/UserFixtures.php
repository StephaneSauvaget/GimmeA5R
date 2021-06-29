<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{

    private $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager)
    {
        $user = new User;
        $user->setNickname('titi');
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'bobo'
        ));
        $manager->persist($user);
        $manager->flush();

        $user = new User;
        $user->setNickname('ice');
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'ice'
        ));
        $manager->persist($user);
        $manager->flush();

        $user = new User;
        $user->setNickname('ced');
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'ced'
        ));
        $manager->persist($user);
        $manager->flush();

        $user = new User;
        $user->setNickname('rno');
        $user->setRoles(["ROLE_USER"]);
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'rno'
        ));
        $manager->persist($user);
        $manager->flush();
    }
}
