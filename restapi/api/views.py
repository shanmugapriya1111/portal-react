from django.shortcuts import render, render_to_response
from django.contrib import messages
from api.serializers import RegisterSerializer
from api.models import Register
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.

class LoginView(APIView):
    """User login to access all managements"""
    def get_object(self, name):
        """This is for getting particular User object"""
        try:
            result = Register.objects.get(username=name)
            return result
        except ObjectDoesNotExist:
            return False

    def post(self, request, format=None):

        register = self.get_object(request.data['username'])
        if register:
            if register.password == request.data['password']:
                (response,status_code) = ("Login successfully",status.HTTP_200_OK)
                return Response(response,status_code)
            else:
                (response,status_code) = ('Password is not correct',status.HTTP_400_BAD_REQUEST)
                return Response(response,status_code)
        else:
            (response,status_code) = ('username is not correct',status.HTTP_400_BAD_REQUEST)
            return Response(response,status_code)


class RegisterView(APIView):
    """User login to access all managements"""
    def get_object(self, name):
        """This is for getting particular User object"""
        try:
            result = Register.objects.get(username=name)
            return result
        except ObjectDoesNotExist:
            return False

    def post(self, request, format=None):
        """This is for checking given username and password are correct"""

        user = self.get_object(request.data['username'])
        
        if user:
            (response, status_code) = ('Username already exists', status.HTTP_400_BAD_REQUEST)
            return Response(response, status=status_code)
        else:
            register = Register()
            register.username = request.data['username']
            register.firstname = request.data['firstname']
            register.lastname = request.data['lastname']
            register.email = request.data['email']
            register.password = request.data['password']
            register.save()
            (response, status_code) = ('Employee successfully created', status.HTTP_200_OK)
            return Response(response, status=status_code)








