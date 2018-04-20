from rest_framework import serializers
from api.models import Register

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('id','username','firstname','lastname','email','password')
        