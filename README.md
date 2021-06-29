Run in your terminal:
1) `git clone https://github.com/StephaneSauvaget/GimmeA5R`
2) `composer install`
3) `composer require symfony/webpack-encore-bundle`
4) `yarn install`
5) `composer require symfony/security-bundle`
6) `composer require orm-fixtures --dev` 
7) maybe or not run : `composer require --dev orm-fixtures` (We aren't sure enought)
8) If you encounter this error message : "Only the ‘en’ locale is supported. Please install the ‘intl’ extension for full localization capabilities."
Please read Twig > Docs > Filters > format_datetime
Install php7.4-intl module : (If you run php7.4...)
`sudo apt install php7.4-intl`
9)`composer require twig/intl-extra`
