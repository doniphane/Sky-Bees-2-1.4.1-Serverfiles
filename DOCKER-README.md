# Sky Bees 2 Server - Docker Setup

Ce guide explique comment lancer votre serveur Minecraft Sky Bees 2 dans Docker avec redémarrage automatique.

## Prérequis

- Docker installé sur votre système
- Docker Compose installé
- Au moins 6 GB de RAM disponible

## Installation de Docker

### Windows
1. Téléchargez [Docker Desktop](https://www.docker.com/products/docker-desktop/)
2. Installez et démarrez Docker Desktop

### Linux
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io docker-compose

# Démarrer le service Docker
sudo systemctl start docker
sudo systemctl enable docker
```

## Lancement du serveur

### Première utilisation

1. Ouvrez un terminal dans le dossier du serveur
2. Construisez et lancez le conteneur :

```bash
docker-compose up -d
```

Le flag `-d` lance le serveur en arrière-plan (mode détaché).

### Commandes utiles

**Voir les logs du serveur :**
```bash
docker-compose logs -f
```

**Arrêter le serveur :**
```bash
docker-compose down
```

**Redémarrer le serveur :**
```bash
docker-compose restart
```

**Accéder à la console du serveur :**
```bash
docker attach skybees-server
```
Pour quitter sans arrêter le serveur : `Ctrl+P` puis `Ctrl+Q`

**Voir le statut du conteneur :**
```bash
docker-compose ps
```

## Redémarrage automatique

Le serveur est configuré avec `restart: unless-stopped`, ce qui signifie :
- ✅ Redémarre automatiquement si le serveur crash
- ✅ Redémarre automatiquement au démarrage de la machine
- ❌ Ne redémarre PAS si vous l'arrêtez manuellement avec `docker-compose down`

## Configuration de la mémoire

Par défaut, le serveur utilise :
- RAM minimum : 4096 MB (4 GB)
- RAM maximum : 5120 MB (5 GB)

Pour modifier ces valeurs, éditez le fichier `docker-compose.yml` :

```yaml
environment:
  - MEMORY_MIN=4096M
  - MEMORY_MAX=5120M
```

## Ports

Le serveur utilise le port `25565` par défaut. Si vous souhaitez utiliser un port différent :

1. Éditez `docker-compose.yml` :
```yaml
ports:
  - "VOTRE_PORT:25565"
```

2. Relancez le serveur :
```bash
docker-compose down
docker-compose up -d
```

## Sauvegarde des données

Les données suivantes sont persistées dans des volumes et ne seront pas perdues :
- `world/` - Le monde Minecraft
- `logs/` - Les logs du serveur
- `config/` - Les configurations
- `server.properties` - Propriétés du serveur
- Fichiers JSON (ops, whitelist, banned players/IPs)

## Résolution de problèmes

**Le serveur ne démarre pas :**
```bash
# Vérifier les logs
docker-compose logs

# Reconstruire l'image
docker-compose build --no-cache
docker-compose up -d
```

**Problème de permissions :**
```bash
# Linux uniquement
sudo chown -R $(whoami):$(whoami) .
```

**Le serveur utilise trop de ressources :**
Ajustez les limites dans `docker-compose.yml` section `deploy.resources.limits`.

## Support

Pour plus d'informations sur Docker :
- [Documentation Docker](https://docs.docker.com/)
- [Documentation Docker Compose](https://docs.docker.com/compose/)
