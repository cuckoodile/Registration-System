from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Students, Address
from .serializers import StudentSerializer
# Create your views here.

class StudentsView(APIView):
    def get(self, request, format=None):
        students = Students.objects.all().order_by('-id')
        serializer = StudentSerializer(students, many=True)
        return Response({'ok': True, 'data': serializer.data}, status=200)
    
    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'ok': True, 'data': serializer.data}, status=200)
        return Response({'ok': False, 'errors': serializer.errors})
    
    def patch(self, request, format=None):
        try:
            student_instance = Students.objects.get(id = request.data['id'])
            serializer = StudentSerializer(student_instance, data = request.data, partial=True) 

            if serializer.is_valid():
                serializer.save()
                return Response({'ok': True, 'data': serializer.data, 'msg': "Update successful!"})
            return Response({'ok': False, 'errors': serializer.errors})
        
        except:
            return Response({'ok': False, 'msg': 'Student not found'})
        
    def delete(self, request, format=None):
        try:
            student_instance = Students.objects.get(id = request.data['id'])
            student_instance.delete()
            return Response("Deleted")
        except:
            return Response({'ok': False, 'msg': 'Student not found'})

class StudentDetailView(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Students.objects.all() 
    serializer_class = StudentSerializer

class AddressView(APIView):
    def get(self, request, format=None):
        address = Address.objects.all().order_by('-id')
        serializer = StudentSerializer(address, many=True)
        return Response({'ok': True, 'data': serializer.data}, status=200)
    
    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'ok': True, 'data': serializer.data}, status=200)
        return Response({'ok': False, 'errors': serializer.errors})
    
    def patch(self, request, format=None):
        try:
            student_instance = Students.objects.get(id = request.data['id'])
            serializer = StudentSerializer(student_instance, data = request.data, partial=True) 
            # partial = to allow null values in edit

            if serializer.is_valid():
                serializer.save()
                return Response({'ok': True, 'data': serializer.data, 'msg': "Update successful!"})
            return Response({'ok': False, 'errors': serializer.errors})
        
        except:
            return Response({'ok': False, 'msg': 'Student not found'})
        
    def delete(self, request, format=None):
        student_instance = Students.objects.get(id = request.data['id'])
    
        student_instance.delete()
        return Response("Deleted")