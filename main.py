from flask import Flask,render_template,request,send_file

app=Flask(__name__,template_folder='Unit Convertor')

@app.route("/")
def home():
    return send_file('index.html')

@app.route("/b2")
def b2():
    return send_file('b2.html')

@app.route("/b3")
def b3():
    return send_file('b3.html')

@app.route("/b4")
def b4():
    return send_file('b4.html')

if __name__=="__main__":
    app.run(debug=True)
