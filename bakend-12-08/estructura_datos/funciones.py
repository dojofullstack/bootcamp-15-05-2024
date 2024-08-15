


def nombreFuncion():
    print("ejeuctando funcion")
    print("ejeuctando funcion")
    print("ejeuctando funcion")
    print("ejeuctando funcion")
    print("ejeuctando funcion")



def saludar(nombre, stack_favorito, project_active):
    # print(f"hola {nombre} maneja el stack {stack_favorito}")
    if project_active:
        return "Trabajando en Polysign"

    return f"hola {nombre} maneja el stack {stack_favorito}"




salida = saludar( stack_favorito="react y django", project_active=False, nombre="henry")

print(salida)


def get_datos_users(*args):
    print(args)

    for elemento in args:
        print(elemento.upper())


def get_productos_detail(**args):
    print(args)
    # print(args.items())

# get_datos_users("carlos", "pedro", "henry")


# get_productos_detail(producto1="xiomi", producto2="pixel", producto3="iphone")