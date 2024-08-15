


isUserVip = False

edad = 33

if isUserVip:
    print("Si tiene acceso")
    print("Si tiene acceso")

    if edad > 30:
      print("mayor")
else:
    print("usuario es invitado!")



# condiciones multiples o anidadas

emailActivo = False
phoneVerificado = True

if emailActivo:
    print("cuenta verificada")
elif emailActivo or phoneVerificado:
    print("cuenta verificada 2")
else:
    print("no esata verificado")
