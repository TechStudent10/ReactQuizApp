from flask import Blueprint, request

api = Blueprint('api', __name__)

quizes = {
    'python': {
        'name': 'Python Quiz!',
        'maker': 'TechStudentPython',
        'questions': [
            {
                'text': 'Hello World?',
                'questions': [
                    {
                        'text': 'Yes',
                        'correct': True
                    },
                    {
                        'text': 'No',
                        'correct': False
                    },
                    {
                        'text': 'Maybe?',
                        'correct': False
                    }
                ]
            },
            {
                'text': 'Flask?',
                'questions': [
                    {
                        'text': 'Yes',
                        'correct': True
                    },
                    {
                        'text': 'No',
                        'correct': False
                    },
                    {
                        'text': 'Maybe?',
                        'correct': True
                    }
                ]
            },
            {
                'text': '3D Rendering?',
                'questions': [
                    {
                        'text': 'Yes',
                        'correct': False
                    },
                    {
                        'text': 'No',
                        'correct': True
                    },
                    {
                        'text': 'Maybe?',
                        'correct': False
                    }
                ]
            }
        ]
    }
}

@api.route('/getQuiz', methods=['POST'])
def getQuiz():
    json = request.json

    code = json.get('code')
    if code in quizes:
        return {'error': False, **quizes.get(code)}
    return {'error': True, 'message': 'Quiz not found.'}
