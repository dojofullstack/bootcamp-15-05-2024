import json

# esto es un comentarios

"""
    esto es un comentarios
    de multiples
    lineas
"""


""" Tipo de dato String """
email = "user@gmail.com user22@gmail.com"
nombre = "pedro carlos"
edad = "33"

# print( dir(email) )

# print( email.replace("gmail", "hotmail"))

# print( nombre.title() )

# print( nombre.find("carlos") )

# print( edad.isdigit() )

# print( email.split("@"))

# print( email.count("@"))

# print( type(edad) )
# edad2 = str(123)

# print( type(edad2) )


""" Tipo de dato Numeral """
precio = 12.5
cantidad = 3
# print(type(precio))
# print(type(cantidad))

# float("12.5")
# int("5")

# operaciones basicas
sumas = precio + 3
# precio += 3

resta = precio - 3
# precio -= 3

multipliccion = precio * 3
# precio *= 3

divsion = precio / 3
# precio /= 3


""" Tipo de dato Bool """
isAdmin = True
isPremium = False
# print(type(isAdmin))
# bool()

nombre = ""
precioOffer = 0

# print( bool(nombre) )
# print( bool(precioOffer) )


""" Tipo de dato Lista """
juguetes = ["pleigo", "autoRemoto", "cartas"]
juguetesNuevos = ["robot", "balon", "robot"]
# print(juguetes)
# print(type(juguetes))

print( len(juguetes) )

# juguetes[0]
# juguetes[1]
# juguetes[2]

list()

juguetes.append("domino")
juguetes.append("monopoly")

juguetes.extend(juguetesNuevos)

# print(juguetes)

# print(juguetes.count("robot"))

juguetes.remove("cartas")

juguetes.pop()

# print(juguetes)

# print(juguetes.index("auto remoto"))


""" Tipo de dato Dict """

perfil = {
    "email": "user@gmailc.om",
    "edad": 12,
    "isActive": True,
    "roles": ["editor", "lector"],
    "preferencias": {
        "color": "green",
        "carrito": None
    }
}

# print(type(perfil))

# dict()
# print(perfil["email"])
# print(perfil.get("pwd", "algun valor"))

# para actualuzar y para crear
perfil["email"] = "user1212@gmail.com"
perfil["emailSecundario"] = "seconduario@gmail.com"

del perfil["email"]

# print(perfil)


""" Tipo de dato set """
usuarios_id = {"pedro", "mario", "carlos", "henry", "jaime", "jaime"}
usuarios_id.add("elonMusk")
usuarios_id.remove("carlos")
# print(usuarios_id)


""" Tipo de dato Tupla """
apiKeys = ("1029012", "qpwuwiquiwuqiw")

print( apiKeys[0] )

print( len(apiKeys) )

apiKeys = ("1029012", "qpwuwiquiwuqiw", "otro tupla")

print( apiKeys )


