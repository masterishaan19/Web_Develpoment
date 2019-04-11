#!/usr/bin/env python3

from flask import Flask, request, flash, url_for, redirect, render_template, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import check_password_hash, generate_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite://///media/maahi/Acer/Mahendra/web_development/Web_Develpoment/develop.db'
app.config['SECRET_KEY'] = "#fuhafiuhd8r093820$%@!"
app.config['SQLALCHEMY_ECHO'] = True
db = SQLAlchemy(app)

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email    = db.Column(db.String(120), unique=True, nullable=False)
    phone   = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=True, nullable=False)

    def __init__(self, name, email, phone, password):
        self.username = name
        self.email = email
        self.phone = phone
        self.password = password

@app.route('/')
def show_all():
   return render_template('layout.html')

@app.route('/about')
def about():
    return render_template('aboutUs.html')

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':          
        username     = request.form['loginFeild']
        password    = request.form['pwdFeild']
        user = Users.query.filter_by(username = username).first()
        if user is not None:
            if check_password_hash(user.password, password):
                flash("successfully logged in")
            else:
                flash("password is incorrect")
        else:
            flash("username incorrect")    
    return render_template('login.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/signup' ,methods = ['POST', 'GET'])
def signup():
    if request.method == 'POST':          
        name     = request.form['uName']
        email    = request.form['eMail']
        phone    = request.form['phoneNum']
        passw    = request.form['pwdFeild']
        passw = generate_password_hash(passw)
        user = Users(name, email, phone, passw)
        db.session.add(user)
        db.session.commit()
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug = True)
    