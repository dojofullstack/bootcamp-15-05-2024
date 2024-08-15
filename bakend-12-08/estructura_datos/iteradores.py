import time
# ciclo for

seriesNetflix = ["superman", "big bang Theory", "Dr. House"]


# for index, elemento in enumerate(seriesNetflix) :
#     # index = seriesNetflix.index(elemento)

#     if index == 1:
#         continue

#     print(index, elemento)




listaGenerada = range(5)

print(listaGenerada)

for item in listaGenerada:
    print(item)




# ciclo while

isAnalisisVirus = True

while isAnalisisVirus:
    print("analizar sistema")
    time.sleep(1)

    respuesta = input("Quieres detener el ciclo??")
    if respuesta == "detener":
        # isAnalisisVirus = False
        break
