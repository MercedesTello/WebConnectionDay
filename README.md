## Web Day Connection Day

Para este desafío colaboramos con una pequeña empresa que necesita implementar algunas de las funcionalidades básicas de un e-commerce en su negocio.

La meta principal del nuestro proyecto es desarrollar un e-commerce que ofrezca a los usuarios la posibilidad de visualizar los productos con los que cuentan, así como sus precios. Para iniciar decidimos utilizar tres historias de usuario:

1. El usuario puede visualizar la lista de productos disponibles
2. El usuario pueda visualizar el precio del producto
3. El usuario puede buscar productos y filtrar los que están disponibles

Antes de comenzar con la primera historia de usuario, se realizó un prototipo de baja fidelidad, seguido de uno de alta fidelidad que se encuentra disponible [aquí](https://www.figma.com/file/ItXZJFJ4QyDfp4R5YVQD6j/Web-day?node-id=0-1&t=pYrEMXF9nhNMfvO9-0).

Para poder mostrar los productos e iniciar con nuestras historias, realizamos una petición a una API externa donde se encuentran todos estos. 

Después, para nuestra segunda historia de usuario agregamos no solo el precio inicial, sino el precio con el descuento aplicado, para lo que se ideó una función que tome como referencia la propiedad que incluye el porcentaje de descuento a aplicar. 