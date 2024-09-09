from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import ProductSerializer


class ProductApiView(APIView):
    
    def get(self, request):
        products = Product.objects.all()
        # productUltimo = products.last()
        # print(productUltimo.title)

        data_serializar = ProductSerializer(products, many=True)

        # data = {
        #     "title": productUltimo.title,
        #     "price": productUltimo.price,
        #     "imagen": productUltimo.image.url,
        # }

        # print(data)

        return Response({
            "data": data_serializar.data
        })   
     

    def post(self, request):
        data = request.data

        data_serializar = ProductSerializer(data=data)

        if data_serializar.is_valid():
            data_serializar.save()

        return Response({
            "data": data_serializar.data
        })