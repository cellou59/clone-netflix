<div>
  <strong>
    Clone de NetFlix
  </strong>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Netlify Status][netlify-badge]][netlify]
<!-- prettier-ignore-end -->

## Configuration requise

- [git][git] v2.13 ou supérieure
- [NodeJS][node] `12 || 14 || 15 || 16`
- [npm][npm] v6 ou supérieure

Ces executables doivent etre inclus votre `PATH`. Pour vérifier qu'ils sont
corretement installés et configuré vous pouvez executer :

```shell
git --version
node --version
npm --version
```

En cas de difficulté pour modifier la variable d'environnement PATH sur votre
machine, vous pouvez consulter [windows][win-path] or [mac/linux][mac-path].

## Installation

> Si vous voulez modifier et commiter vos modification sur ce repo (notes etc
> ...), vous pouvez faire un
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> sur votre github (au autre).

Après avoir installé et configuré les bonnes versions sur votre machine, vous
pouvez executer cette commande pour pour demarrer la configuration du projet :

```
git clone https://github.com/MikeCodeur/react-netflix-clone
cd react-netflix-clone
npm run init
```

La plupart des problèmes de la commande `npm run init` sont dus aux varialbes
d'environnement PATH

Si vous avez une erreur, lisez le message d'erreur et essayer de corriger. Si
vous ne trouvez pas de solution vous pouvez [ouvrir un ticket][issue] en donnant
le résultat de la console

Si le script de setup pose problème vous pouvez simplement executer les deux
commandes suivantes :

```
npm install
npm run validate
```

Si vous maitriser [Docker](https://www.docker.com/products/docker-desktop) 🐳
vous pouvez démarrer le projet :

```
docker-compose up
```

## Démarrer l'application

Pour demarrer l'application, exécuter:

```shell
npm start
```

L'application est basé sur react-create-app et
[react-scripts](https://create-react-app.dev/).

Vous pouvez aussi acceder au déploiement
[déploiement sur Netlify](https://react-prerequis-debutant.mikecodeur.com/).

## Executer les tests

```shell
npm test
```

Cela va démarrer [Jest](https://jestjs.io/). Les tests sont là pour vous aider a
atteindre la version finale, mais _parfois_ vous pouvez réuissir l'exercice and
le test peut échouer car vous avez implémenter d'une manière différente.


<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/MikeCodeur/react-testing/installation
[build]: https://github.com/MikeCodeur/react-testing/actions
[netlify-badge]: https://api.netlify.com/api/v1/badges/3bf97d4c-9be9-4459-a6b5-2c9a4c3ca533/deploy-status
[netlify]: https://app.netlify.com/sites/pensive-stonebraker-de3913/deploys
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/mikecodeur/react-testing/blob/main/LICENSE
[all-contributors]: https://github.com/mikecodeur/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/mikecodeur/react-testing?color=orange&style=flat-square
[win-path]: https://tutorielsgeek.com/comment-definir-des-variables-denvironnement-dans-windows-10/
[mac-path]: https://support.apple.com/fr-tn/guide/terminal/apd382cc5fa-4f58-4449-b20a-41c53c006f8f/mac
[issue]: https://github.com/mikecodeur/react-testing/issues/new
<!-- prettier-ignore-end -->
