from rest_framework import viewsets
from rest_framework import filters
from .models import Table
from .serializers import TableSerializer
from .utils import sort_tool
from pprint import pprint


class TableList(viewsets.ModelViewSet):

    def get_queryset(self):
        if not self.request.method == 'GET':
            return Table.objects.all()
        if ('field' in self.request.query_params and 
            'value' in self.request.query_params and 
            'sort_method' in self.request.query_params):
            sort_method = self.request.query_params['sort_method']
            value= self.request.query_params['value']
            field = self.request.query_params['field']
            return sort_tool(field, value, sort_method)
        else:
            return Table.objects.all()

    queryset = Table.objects.all()
    
    serializer_class = TableSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['title', 'amount', 'distance']
