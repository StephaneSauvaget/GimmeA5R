<?php

namespace App\DataFixtures;

use App\Entity\Event;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use \DateTimeInterface;

class EventFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $event = new Event();
        $event->setName('Git et GitHub pour débutants');
        $event->setResume('You\'ve heard about Git and GitHub and you know that\'s a hot topic right now for developers? If you\'d like to finally know what\'s a commit, a push or a conflict, this workshop is made for you!');
        $event->setCity('Bruxelles');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.com/e/free-workshop-git-and-github-for-beginners-tickets-160403008717#');
        $event->setDate(new \DateTime('2011-01-01 15:00'));
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('L\'intelligence Artificielle dans le secteur du Vin/ WINESPACE');
        $event->setResume('Winespace, Start-up Bordelaise combinant expertise du vin et Intelligence Artificielle, viendra vous partager ses travaux : comment le TAL (Traitement Automatique des Langues) et l’IA (Intelligence Artificielle) peuvent aider le monde du vin ?
        Elle vous présentera « Tastee », son Intelligence Artificielle capable de comprendre des commentaires de dégustation de vin, dans le but d’extraire et de quantifier l’ensemble des caractéristiques organoleptiques décrites dans chaque commentaire.');
        $event->setCity('Bordeaux');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/talk-lintelligence-artificielle-dans-le-secteur-du-vin-w-winespace-tickets-158606280655#');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Penser comme un développeur web');
        $event->setResume('Vous souhaitez vous initier au Développement Web ? Participez à notre atelier "Penser comme un développeur web" animé par Louis, co-fondateur du Wagon Nice. Essentielle pour tester son product/market-fit, la Landing Page permet de présenter son produit, d’attirer des leads et, en plus, de collecter des données. En apprenant les bases de la programmation et quelques astuces de développeurs, vous saurez construire une page web en peu de temps. De Sublime Text aux premiers sélecteurs CSS en passant par le markup HTML, vous saurez réaliser rapidement votre site en utilisant les mêmes outils que des pros (Bootstrap, FontAwesome, Google Fonts, Colorzilla, etc.).');
        $event->setCity('Nice');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/workshop-l-penser-comme-un-developpeur-web-tickets-159467628971');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Explorez la data comme un data analyst');
        $event->setResume('Vous souhaitez vous initier à la Data Science ? Participez à notre workshop "Explorer la Data comme un Data Analyst" animé par Louis, co-fondateur du Wagon Nice. Dans cet atelier, vous utiliserez Python, BeautifulSoup et Jupyter afin de vous montrer les bases du web scraping pas à pas. Une certaine expérience avec Python sera utile, mais n\'est pas nécessaire - les concepts de programmation seront expliqués de manière pratique et accessible.');
        $event->setCity('Nice');
        $event->setCategory('Data');
        $event->setLink('https://www.eventbrite.fr/e/workshop-l-explorez-la-data-comme-un-data-analyst-tickets-159478200591');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('CARRIÈRES DANS LA TECH : DÉVELOPPEUR WEB');
        $event->setResume('Comme vous le savez, la technologie est partout et c\'est l\'un des secteurs les plus prometteurs, avec une demande d\'emploi en constante augmentation ! Les sites web et les applications mobiles sont en constante évolution, et les entreprises ont besoin d\'embaucher les meilleurs profils tech. Développeur web, Product Owner, UX Designer... chacun de ces métiers a des défis spécifiques ! Tous ces métiers sont possibles après le bootcamp, lequel est fait pour vous ?');
        $event->setCity('Casablanca');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.com/e/inscription-careers-in-tech-web-developer-160930799353');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Codez votre première page web !');
        $event->setResume('En seulement 2 heures, vous apprendrez à créer et développer votre propre page Web. De Sublime Text aux premiers sélecteurs CSS en passant par le markup HTML, vous saurez réaliser rapidement votre site en utilisant les mêmes outils que les pros (Bootstrap, FontAwesome, Google Fonts, Colorzilla, etc.).');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.meetup.com/fr-FR/Le-Wagon-Paris-Coding-Bootcamp/events/279131171/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('CAREERS IN TECH : PRODUCT OWNER');
        $event->setResume('Durant notre mois Carrière, rejoignez-nous pour un tour d\'horizon des missions et des compétences requises pour réussir dans ces postes. Cette semaine, apprenez tout sur le quotidien d\'un product owner ! Quelles sont les responsabilités et missions d\'un Product Owner ? Quelles sont les compétences des Product Owner?');
        $event->setCity('Casablanca');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.com/e/careers-in-tech-product-owner-tickets-161197178099');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Product Design Sprint
        ');
        $event->setResume('A sprint methodology to define and prototype the MVP you want to build. Through this workshop, you will define your app\'s use case in a very clear way and find the angle that makes you different from competitors. You will also learn how to build an actual mockup and a prototype.

        Learn to quickly build a set of icons, a newsletter banner, or even a mockup for your app. We\'ll cover everything you need to know to build your graphical assets: the latest and coolest resources for the best pictures, icons, colors, fonts, and patterns.');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.com/e/free-workshop-product-design-sprint-tickets-159499251555');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Product Design Sprint
        ');
        $event->setResume('Entrepreneurs and Product Managers often struggle to explain their product in a clear and concise way. To do so, what\'s better than a prototype? As you know, an image is worth a thousand words!

        This workshop will give you a simple methodology to turn any business idea into a Minimum Viable Product (MVP)!');
        $event->setCity('Barcelona');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.es/e/product-design-sprint-tickets-159638630441');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Prototypez votre application en 1h !');
        $event->setResume('Découvrez la méthodologie du sprint design pour définir et prototyper votre MVP pour votre application web ou mobile. Lors de cet atelier, vous apprendrez à construire une maquette interactive avec Figma pour tester votre design auprès d\'utilisateurs.');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.meetup.com/fr-FR/Le-Wagon-Paris-Coding-Bootcamp/events/279131259/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('JavaScript pour débutants');
        $event->setResume('This programming language is very popular and has been used by all web browsers for more than 15 years and every web developer will code some JS during their career!');
        $event->setCity('Melbourne');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.com.au/e/javascript-for-beginners-tickets-161431039585');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Apprenez à automatiser vos tâches avec des APIs');
        $event->setResume('APIs pour débutants,
        cet acronyme est partout. Si vous avez du mal à comprendre exactement de quoi il s\'agit, cet atelier va vous éclairer sur cette notion à travers plusieurs exemples d’API Web que vous utilisez dans votre vie quotidienne (Google Maps, Twitter, Twilio).');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.meetup.com/fr-FR/Le-Wagon-Paris-Coding-Bootcamp/events/279131287/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Créez des sites web dynamiques avec Javascript !');
        $event->setResume('Découvrez les bases de JavaScript, le langage de programmation incontournable pour animer son site web. Il est utilisé par tous les navigateurs web depuis plus de 15 ans et les développeur.se.s. coderont au moins une fois en JS. D\'ailleurs plusieurs frameworks ont été construits en JS, comme React.js de Facebook.');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.meetup.com/fr-FR/Le-Wagon-Paris-Coding-Bootcamp/events/279131325/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Formation Développeur Web & Mobile');
        $event->setResume('Assistez à la réunion d’information concernant le Coding Bootcamp Full-Stack Javascript de 10 semaines (à temps plein) ou 25 semaines (à temps partiel), pour apprendre le métier de Développeu·r·se Web et Mobile.');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.lereacteur.io/evenements/inscription/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Building The New Web - Paris - 2nd edition');
        $event->setResume('The web as we know it has proven to be reminiscent of Pandora\'s Box. An unprecedented experiment of human faith with outcomes we had yet to discover. The discussions on privacy, security, trust, personal data and governance are becoming fiercer by the day. The loudest critics believe the foundations of the internet were flawed to begin with.');
        $event->setCity('Paris');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/building-the-new-web-paris-2nd-edition-tickets-88181710871?aff=ebdssbdestsearch&keep_tld=1');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('L’école de l’expertise informatique vous ouvre ses portes! Venez découvrir la pédagogie unique de la Web@cademie');
        $event->setResume('Lors de cette journée portes ouvertes, vous aurez l\'occasion de rencontrer nos équipes au cours d\'une présentation interactive sur la méthodologie active qui fait la réputation et la spécificité de la Web@cademy. Dans un deuxième temps, vous aurez l\'opportunité de participer à un atelier de Découverte du Code durant 1h.');
        $event->setCity('Paris');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/billets-webacademie-journee-portes-ouvertes-jeudi-8-juillet-2021-160968215265?aff=ebdssbdestsearch');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Rex Vivatech au Village by CA Paris');
        $event->setResume('En 2019, 13 000 startups, 3 300 investisseurs et 2 500 journalistes répondaient présents à l\'appel de Vivatech. La grande communauté sur place représentait 125 pays au total. Vivatech, premier salon qui rouvre ses portes depuis 2020, est devenu le rendez-vous annuel du monde de l\'innovation tech et des startups.');
        $event->setCity('Paris');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/billets-rex-vivatech-au-village-by-ca-paris-159089616325?aff=ebdssbdestsearch');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Introduction to Technology Trends');
        $event->setResume('Technology is transforming our lives, it simply makes everything easier, faster, better, and more fun!
        It is also advancing at an incredible rate and we know it is not easy to keep up, especially for people that are not in the tech sector .
        That is why at TAAL Project foundation, we believe access to technology is a fundamental right. Our mission is to share our love for technology, make it more accessible and guide people to the best free online resources available.
        Our webinar "Introduction to Tech Trends" is for everyone to discover in an easy way some of our time’s most important tech trends and their impact ...');
        $event->setCity('Paris');
        $event->setCategory('Cyber-sécurité');
        $event->setLink('https://www.eventbrite.fr/e/billets-introduction-to-technology-trends-161098005471?aff=ebdssbdestsearch');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Growth Café : Digital Workplace - la clé pour travailler efficacement');
        $event->setResume('Comment offrir concrètement à ses collaborateurs un point d\'accès unique , même à distance, aux applications métiers et aux informations personnalisées.
        Stefano Sichi, ex-directeur de Microsoft et fondateur de Strelatech, agence de consulting en digital workplace, vous partegera une méthodologie et des retours d\'expériences.');
        $event->setCity('Paris');
        $event->setCategory('Développement web');
        $event->setLink('https://www.eventbrite.fr/e/billets-growth-cafe-digital-workplace-la-cle-pour-travailler-efficacement-159906967043?aff=ebdssbdestsearch');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Google for Games Developer Summit');
        $event->setResume('Les équipes de jeux de Google vous invitent à participer au Google for Games Developer Summit 2021, les 12 et 13 juillet en ligne. L’objectif : aider les développeurs à satisfaire et mieux engager leur communauté d’utilisateurs.');
        $event->setCity('Online');
        $event->setCategory('Développement web');
        $event->setLink('https://www.blogdumoderateur.com/evenements/google-for-games-developer-summit/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('BUSINESS OF DATA FESTIVAL');
        $event->setResume('Join us and experience a brand new format for inspiration and ideas, as we stream a series of interviews featuring perspectives from data and analytics leaders across the world.');
        $event->setCity('Online');
        $event->setCategory('Data');
        $event->setLink('https://www.boddigitalbroadcast.com/festival/home?utm_term=data%20science%20conference&utm_campaign=0761+BoD+Festival+2021+-+Search+EU&utm_source=adwords&utm_medium=ppc&hsa_ad=522935677673&hsa_cam=13176697814&hsa_ver=3&hsa_net=adwords&hsa_acc=7120177801&hsa_mt=p&hsa_kw=data%20science%20conference&hsa_tgt=kwd-298322623183&hsa_src=g&hsa_grp=128231338731&gclid=Cj0KCQjw5uWGBhCTARIsAL70sLKYZJI6W7vR1t2bkVG1JfM225pL2xUyFVSaqUtOLliem5HIEVieltkaAnpSEALw_wcB');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Federated Learning Workshop');
        $event->setResume('Owkin, Société Française de Statistique (SFdS), and Accenture Labs are thrilled to invite you to the third and last event of the Federated Learning Workshop series. These technical, research-oriented events are free of charge and attract both academic and industry attendees.');
        $event->setCity('Paris');
        $event->setCategory('Data');
        $event->setLink('https://www.eventbrite.fr/e/federated-learning-workshop-registration-159467364179?aff=ebdssbdestsearch&keep_tld=1');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Welcome to SciPy 2021');
        $event->setResume('SciPy 2021, the 20th annual Scientific Computing with Python conference, will be a virtual conference held July 12-18, 2021. The annual SciPy Conference brings together attendees from industry, academia, and government to showcase their latest projects, learn from skilled users and developers, and collaborate on code development. The full program will consist of 2 days tutorials (July 12-13), 3 days of talks (July 14-16), and 2 days of developer sprints (July 17-18).');
        $event->setCity('Online');
        $event->setCategory('Data');
        $event->setLink('https://www.scipy2021.scipy.org/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Welcome to EuroPython 2021 Online');
        $event->setResume('Welcome to EuroPython 2021 Online,
        the largest Python conference in Europe');
        $event->setCity('Online');
        $event->setCategory('Data');
        $event->setLink('https://ep2021.europython.eu/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('BIG DATA & AI PARIS');
        $event->setResume('BIG DATA & AI PARIS EST L’ÉVÉNEMENT EUROPÉEN DE RÉFÉRENCE DU BIG DATA ET DE L’INTELLIGENCE ARTIFICIELLE EN 2021');
        $event->setCity('Paris');
        $event->setCategory('Data');
        $event->setLink('https://www.bigdataparis.com/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Virtual Conference KDD2021');
        $event->setResume('');
        $event->setCity('Online');
        $event->setCategory('Data');
        $event->setLink('https://www.kdd.org/kdd2021/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('NeurIPS 2021');
        $event->setResume('The Neural Information Processing Systems Foundation is a non-profit corporation whose purpose is to foster the exchange of research advances in Artificial Intelligence and Machine Learning, principally by hosting an annual interdisciplinary academic conference with the highest ethical standards for a diverse and inclusive community.');
        $event->setCity('Online');
        $event->setCategory('Data');
        $event->setLink('https://neurips.cc/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('DATAIA DAY : 1ST DATA SCIENCE, INTELLIGENCE & SOCIETY CONFERENCE');
        $event->setResume('Premier écosystème français en science des données et intelligence artificielle, l’Institut DATAIA organise une conférence les avancées scientifiques rendues possibles grâce à ses partenariats.');
        $event->setCity('Paris');
        $event->setCategory('Data');
        $event->setLink('https://www.universite-paris-saclay.fr/evenements/dataia-day-1st-data-science-intelligence-society-conference');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('SOMMET VIRTUEL RETAIL ECOMMERCE 30 JUIN 2021');
        $event->setResume('Nous sommes convaincus qu\'un rassemblement de l’industrie, synonyme d’échanges, d’opportunités et de partages sera plus que jamais demandé et nécessaire dans le sillage de cette crise sanitaire');
        $event->setCity('Paris');
        $event->setCategory('Data');
        $event->setLink('https://www.bigdataworld.fr/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('CYBER SECURITY CONFERENCE');
        $event->setResume('Hack in Paris is a steadily growing event, gathering each year IT security experts and passionate, in the French capital. In a dedicated environment, attendees can really understand the realities of hacking and the consequences that companies are facing. It offers during 5 days, a high-quality program dealing with high end IT security, industrial espionage, penetration testing, physical security, forensics, malware analysis techniques and countermeasures.');
        $event->setCity('Paris');
        $event->setCategory('Cyber-sécurité');
        $event->setLink('https://hackinparis.com/');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Sommet Virtuel Cybersécurité 23 juin 2021');
        $event->setResume('Les cyberattaques sont devenues un enjeu majeur pour les entreprises. L’année qui vient de s’écouler nous l’a bien confirmé ; des multinationales aux PME-PMI en passant par les institutions publiques et les établissements de santé, nulle organisation n’est à l’abri des cybercriminels dont les attaques ne cessent d’augmenter et de se complexifier.');
        $event->setCity('Paris');
        $event->setCategory('Cyber-sécurité');
        $event->setLink('https://www.cloudsecurityexpo.fr/virtuel');
        $manager->persist($event);
        $manager->flush();

        $event = new Event();
        $event->setName('Le salon de la sécurité numérique des entreprises');
        $event->setResume('Un Hall d’exposition pour rencontrer des décideurs qualifiés
        Un programme de conférences autour des thématiques et secteurs d’activités majeurs en Occitanie
        Des ateliers animés par les exposants
        Un espace de recrutement et formation pour trouver vos futurs talents
        Une entrée gratuite pour les visiteurs');
        $event->setCity('Toulouse');
        $event->setCategory('Cyber-sécurité');
        $event->setLink('https://cbc-convention.com/');
        $manager->persist($event);
        $manager->flush();
    }
}