from rest_framework.views import APIView
from rest_framework.response import Response




class ProductApiView(APIView):
    
    def get(self, request):
        
        data = {
            "id": 2,
            "title": "phone",
            "price": 233,
            "isStock": True
        }
        return Response(data)

    def post(self, request):
        print(request.data)
        
        return Response({
            "data": request.data
        })