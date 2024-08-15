import json

# print("hola mundo")
# usuario = "benjaim"
# print(usuario)


fichero = open("data.json")

print(fichero)

salida = fichero.read()
# print(salida)

dataJson = json.loads(salida)
print(dataJson["username"])
print(dataJson["id"])
print(dataJson["image"])
print(dataJson["isLogin"])
print(dataJson["creditos"])


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


salidaJson = json.dumps(perfil, indent=4)
print(salidaJson)

procesar = open("perfil.json", "w")
procesar.write(salidaJson) 


fichero.close()