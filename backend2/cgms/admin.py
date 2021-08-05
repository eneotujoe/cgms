from django.contrib import admin
from .models import Member, Event, Analytics, LiveStream

admin.site.register(Member)
admin.site.register(Event)
admin.site.register(Analytics)
admin.site.register(LiveStream)
