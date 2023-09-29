from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Replace with your React app's URL

# Replace the connection string with your MongoDB configuration
client = MongoClient('mongodb://USERNAME:PASSWORD@localhost:27107/?authSource=admin')

@app.route('/api/save-data', methods=['POST'])
def save_data():
    data = request.get_json()
    db = client['flask']  # Replace 'mydatabase' with your MongoDB database name
    collection = db['flaskdb']  # Replace 'mycollection' with your MongoDB collection name
    
    try:
        collection.insert_one(data)
        return jsonify({"message": "Data saved successfully!"})
    except Exception as e:
        return jsonify({"message": "Failed to save data", "error": str(e)}), 500  # 500 is the HTTP status code for Internal Server Error

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
    