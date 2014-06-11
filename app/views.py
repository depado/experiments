# -*- coding: utf-8 -*-

from flask import render_template

from app import app

@app.route('/', methods=['GET'])
def index():
    return "<h1>Hello World</h1>"

@app.route('/webgl', methods=['GET'])
def webgl_index():
    return "<h1>WebGL Experiments</h1>"

@app.route('/webgl/basicscene', methods=['GET'])
def webgl_basicscene():
    return render_template('basicscene.html')