# Generated by Django 3.2.5 on 2021-07-15 10:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cgms', '0002_auto_20210715_0959'),
    ]

    operations = [
        migrations.CreateModel(
            name='Analytics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Analytics',
            },
        ),
        migrations.CreateModel(
            name='LiveStream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
            ],
            options={
                'verbose_name_plural': 'Live Stream',
            },
        ),
    ]