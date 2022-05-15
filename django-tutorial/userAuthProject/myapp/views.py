from django.shortcuts import render,HttpResponse,redirect
from django.contrib.auth import authenticate,login,logout
# user:
# ali
# ali12345

# Create your views here.
def index(request):
    context={}
    if request.user.is_anonymous:
        return redirect('/login')
    return render(request,'index.html',context)

def loginUser(request):
    context={}
    if request.method =="POST":
        username=request.POST.get('name')
        password=request.POST.get('password')
        print(username, password)
        # check if user has entered correct credentials
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request,user)
            return redirect('/')
        else:
            return render(request,'login.html',context)

    return render(request,'login.html',context)

def logoutUser(request):
    context={}
    logout(request)
    return redirect('/login')

