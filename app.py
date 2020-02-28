import base64
import os

from flask import Flask, render_template, redirect, flash
from flask_wtf import FlaskForm
from flask_wtf.csrf import CSRFProtect
from wtforms import StringField, SubmitField, IntegerField, BooleanField
from wtforms.validators import DataRequired, NumberRange

app = Flask(__name__)
app.config.from_object('config')


class StartForm(FlaskForm):
    path = StringField("Path: ", validators=[DataRequired()])
    class_count = IntegerField("Count: ", validators=[DataRequired(), NumberRange(1, 10)])
    isRec = BooleanField('is rec')
    submit = SubmitField("Submit")


# @app.route('/')
def hello_world():
    return render_template('first_page.html', form=StartForm())


if __name__ == '__main__':
    app.run(debug=True)

@app.route('/')
def desk(path='D:/cute', classcount=5):
    res=[]
    for i in os.listdir(path)[:5]:
        with open(os.path.join(path,i), "rb") as image_file:
            base = base64.b64encode(image_file.read())
        res.append(str(repr(base)[2:-1]))
        # print(str(repr(base)[2:-1]))
    return render_template('main.html', form={'path': path, 'classcount': classcount, 'ims': res})


@app.route('/main', methods=['POST'])
def to_main():
    print('here')
    form = StartForm()
    if form.validate_on_submit():
        flash('Login requested for OpenID="' + form.path.data + '", remember_me=' + str(form.class_count.data))
        return desk(path=form.path.data, classcount=form.class_count.data)
    return render_template('first_page.html', form=form)
