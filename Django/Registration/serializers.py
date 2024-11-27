from rest_framework import serializers
from .models import Students, Address

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'province', 'municipality', 'zipCode', 'city', 'barangay', 'streetAddress']

class StudentSerializer(serializers.ModelSerializer):
    address = AddressSerializer()

    class Meta:
        model = Students
        fields = ['id', 'schoolYear', 'firstName', 'middleName', 'lastName', 'grade', 'gender', 'age', 'address', 'section', 'status']

    def create(self, validated_data): 
        address_data = validated_data.pop('address') 
        address, created = Address.objects.get_or_create(**address_data) 
        student = Students.objects.create(address=address, **validated_data) 
        return student

    def update(self, instance, validated_data): 
        address_data = validated_data.pop('address', None) 
        if address_data: 
            Address.objects.filter(id=instance.address.id).update(**address_data) 
            return super().update(instance,validated_data)
