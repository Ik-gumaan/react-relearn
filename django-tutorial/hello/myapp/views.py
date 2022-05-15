from django.shortcuts import render,HttpResponse
from datetime import datetime
from myapp.models import Contact
from django.contrib import messages

# Create your views here.
def index(request):
    # return HttpResponse("This is Home page")
    context={}
    return render(request,'index.html',context)

def about(request):
    context={}
    return render(request,'about.html',context)

def services(request):
    context={}
    return render(request,'services.html',context)

def contact(request):
    context={}
    if request.method == 'POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        phone=request.POST.get('phone')
        comment=request.POST.get('comment')
        contact=Contact(name=name, email=email, phone=phone, comment=comment, date=datetime.today())
        contact.save()
        messages.success(request, 'Your comment has been sent successfully!')

        
    return render(request,'contact.html',context)
