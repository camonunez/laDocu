# La Docu

*Documentation, documentation everywhere*  ✨


## Como funciona la cosa (El repo? paquete? �? app? ... ya, app.)

![tests](https://github.com/camonunez/laDocu/actions/workflows/ci.yml/badge.svg)
![produccion](https://github.com/camonunez/laDocu/actions/workflows/deploy.yml/badge.svg)

```bash
# Se preparan las dependencias necesarias con
$ yarn 


# Se hecha a andar la app en modo desarrollo
$ yarn dev
# El puerto, lo indica la app en el terminal.
# (y tambien la ip, si por alguna maña alguien no quiere usar localhost)
# Ah y con cmd+click en el link, magia.


# Para subir al sitio web, basta con un commit en master y su push al repo en GitHub.
# El deploy a firebase hosting se hace automáticamente una vez y solo si aprueba los tests automáticos.
# onda => tests && deploy


# Para probar como quedan los archivos en firebase
$ yarn generate
# los archivos quedan en la carpeta dist
```

Para más información, webear al Camilo por whatsapp y seguir con otra cosa.

Mil besos, mil besitos, Camilo
