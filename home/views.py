from django.shortcuts import render

# Create your views here.
def home(request):
    title = "Welcome - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/home.html", context)

def about(request):
    title = "About - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/about.html", context)

def projects(request):
    title = "Projects - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/projects.html", context)

def experience(request):
    title = "Career Experience - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/experience.html", context)

def contact(request):
    title = "Contact - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/contact.html", context)

