from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.models import User
from .serializers import UsersSerializer


class UserView(APIView):
    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UsersSerializer(users, many=True)
        return Response({'ok': True, 'data': serializer.data}, status=200)
    
    def post(self, request, format=None):
        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username=request.data['username'])
            user.set_password(request.data['password'])
            user.save()

            return Response({'ok': True, 'data': serializer.data}, status=200)
        return Response({'ok': False, 'errors': serializer.errors}, status=404)
    
    def patch(self, request, format=None):
        try:
            user_instance = User.objects.get(id=request.data['id'])
            if user_instance.check_password(request.data['old_password']):
                request.data.pop('old_password')
                serializer = UsersSerializer(user_instance, data=request.data, partial=True)
                if serializer.is_valid():
                    serializer.save()
                    user = User.objects.get(id=request.data['id'])
                    user.set_password(request.data['password'])
                    user.save()
                    return Response({'ok': True, 'message': 'Password changed successfully.'}, status=200)
                return Response({'ok': False, 'errors': serializer.errors}, status=400)
            return Response({'ok': False, 'message': 'Wrong old password.'}, status=404)
        except:
            return Response({'ok': False, 'message': 'User does not exist.', "id": request.data}, status=404)

    def delete(self, request , format=None):
        try:
            user_instance = User.objects.get(id=request.data['id'])
            user_instance.delete()
            return Response({'ok': True, 'message': 'User deleted.'}, status=200)
        except:
            return Response({'ok': False, 'message': 'User does not exist.', "id": request.data}, status=404)