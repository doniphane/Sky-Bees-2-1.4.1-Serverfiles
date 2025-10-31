# Utiliser Java 16 pour Minecraft 1.16.5
FROM openjdk:8-jdk-slim

# Installer les dépendances nécessaires
RUN apt-get update && \
    apt-get install -y curl wget && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Créer le répertoire de travail
WORKDIR /minecraft

# Copier tous les fichiers du serveur
COPY . /minecraft/

# S'assurer que l'EULA est accepté
RUN echo "eula=true" > eula.txt

# Exposer le port par défaut de Minecraft
EXPOSE 25565

# Définir les variables d'environnement pour la mémoire
ENV MEMORY_MIN=4096M
ENV MEMORY_MAX=5120M

# Commande pour lancer le serveur
CMD java -Xms${MEMORY_MIN} -Xmx${MEMORY_MAX} -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=90 -XX:G1RSetUpdatingPauseTimePercent=5 -XX:SurvivorRatio=32 -XX:+PerfDisableSharedMem -XX:MaxTenuringThreshold=1 -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar minecraft_server.jar nogui
