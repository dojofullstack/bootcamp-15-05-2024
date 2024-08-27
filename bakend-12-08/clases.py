

class TaquillaVentas():
    limiteTicket = 1000
    aforo = 1000

    def __init__(self):
        pass
    


class Autodromo():
    
    def __init__(self, circuito_kilometros, direccion, pais):
        self.circuito_kilometros = circuito_kilometros
        self.direccion = direccion
        self.pais = pais

    def inicar_carrera(self, total_pilotos):
        if total_pilotos > 3:
            print("INiciando carrera!!!!", self.direccion)
        else:
            print("esperar pilotos!!!")





class Auto(Autodromo, TaquillaVentas):
    color = "verde"
    velocidad = "200km/h"
    modelo = "tesla 2024"

    def __init__(self, aceleracion, precio, marca):
        Autodromo.__init__(self, circuito_kilometros="100km", direccion="Avenida MiraFl.", pais="MEXICO")
        TaquillaVentas.__init__(self)
        self.aceleracion = aceleracion
        self.precio = precio
        self.marca = marca

    
    def acelerar(self, inicar):
        if inicar:
            print("acelerando....", self.pais)
            # self.frenar()


    def frenar(self, velocidad):
        if velocidad > 100:
            print("frenando!!!!!")





autoTesla = Auto("10m/s", 123, "tesla")

# print( autoTesla.color )
# print( autoTesla.velocidad )
# print( autoTesla.modelo )
# print( autoTesla.aceleracion )
# print( autoTesla.precio )
# print( autoTesla.marca )

autoToyota = Auto("5m/s", 345, "toyota")
# print(autoToyota.precio)

autoToyota.acelerar(inicar=True)

autoToyota.frenar(123)

print( autoToyota.circuito_kilometros)

print( autoToyota.direccion)

print( autoToyota.pais)

autoToyota.inicar_carrera(5)

print( autoToyota.limiteTicket)





# class Producto(ModelosDjangoTypes):
#     id = self.integer()
#     title = self.chart()
#     precio = self.deciaml()
#     imagen = self.chart()


# tablaProducto = Producto()

# print(tablaProducto)