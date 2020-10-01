from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Order
        fields = ('product_name','total_product','transaction_id','total_amount')

        #Todo add product and quantity