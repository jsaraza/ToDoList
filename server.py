from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['POST'])
def api():
    print('Command Received')
    data = request.get_json()
    # Do some processing with the data
    result = {'result': 'Processed data: ' + data['message']}
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5000)
