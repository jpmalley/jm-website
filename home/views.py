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

def portfolio(request):
    title = "Portfolio - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/portfolio.html", context)

def resume(request):
    title = "Resume - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/resume.html", context)

def contact(request):
    title = "Contact - John Malley"
    context = {}
    context["title"] = title
    return render(request, "home/contact.html", context)

