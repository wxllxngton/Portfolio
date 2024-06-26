#!/usr/bin/python3
"""
Flask application for managing a portfolio website.

This application serves routes for rendering different pages of the portfolio website,
including the home, about, and contact pages, as well as a route for downloading the resume file.
"""

from flask import Flask, render_template, send_file
from flask_bootstrap import Bootstrap
from portfolioManager import *

app = Flask(__name__)
app.config["SECRET_KEY"] = "8BYkEfBA6O6donzWlSihBXox7C0sKR6b"
Bootstrap(app)

@app.route("/")
def home():
    """Render the home page displaying project information."""
    return render_template("index.html", projects=Project.select())

@app.route("/about")
def about():
    """Render the about page providing information about the portfolio owner."""
    return render_template("about.html")

@app.route("/contact")
def contact():
    """Render the contact page with contact information."""
    return render_template("contact.html")

@app.route("/download")
def download_file():
    """Allow downloading the resume file."""
    path = "static/docs/johnombuya-resume.pdf"  # Specify the path to the resume file
    filename = "John Ombuya Resume.pdf"  # Set the name for the downloaded file
    return send_file(path, as_attachment=True, attachment_filename=filename)

if __name__ == "__main__":
    app.run(debug=True)
