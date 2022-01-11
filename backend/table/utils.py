from .models import Table

def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

def sort_tool(field, value, sort_method):
    if sort_method == 'more':
        if field == 'title':
            return Table.objects.filter(title__gt=value)
        elif field == 'distance':
            if isfloat(value):
                return Table.objects.filter(distance__gt=float(value))
        elif field == 'amount':
            if isfloat(value):
                return Table.objects.filter(amount__gt=int(value))
    elif sort_method == 'less':
        if field == 'title':
            return Table.objects.filter(title__lt=value)
        elif field == 'distance':
            if isfloat(value):
                return Table.objects.filter(distance__lt=float(value))
        elif field == 'amount':
            if isfloat(value):
                return Table.objects.filter(amount__lt=int(value))
    elif sort_method == 'equals':
        if field == 'title':
            return Table.objects.filter(title__iexact=value)
        elif field == 'distance':
            if isfloat(value):
                return Table.objects.filter(distance=float(value))
        elif field == 'amount':
            if isfloat(value):
                return Table.objects.filter(amount=float(value))
    elif sort_method == 'contains':
        if field == 'title':
            return Table.objects.filter(title__icontains=value)
        elif field == 'distance':
            return Table.objects.filter(distance__icontains=value)
        elif field == 'amount':
            return Table.objects.filter(amount__icontains=value)    
    return Table.objects.all()
