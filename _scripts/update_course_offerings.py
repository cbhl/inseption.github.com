import yaml
import json
import requests
import os
import sys

# Constants
UWATERLOO_API_URL = 'https://api.uwaterloo.ca/v2/courses/'
UWFLOW_URL        = 'https://uwflow.com/course/'

SOURCE_FILE = '_data/electives.yaml'
OUTPUT_FILE = '_data/electives_generated.yaml'

# Obtain API key for uWaterloo API
API_KEY = os.environ['UW_API_KEY']
if not API_KEY:
    print 'No API key in system environment'
    sys.exit()

# Open allowed electives
stream = open(SOURCE_FILE)
electivesList = yaml.load(stream)

# Access uWaterloo API to fill in missing information
for category in electivesList:
    for elective in category['electives']:
        url     = UWATERLOO_API_URL + elective['department'] + '/' + elective['code'] + '.json?key=' + API_KEY
        request = requests.get(url)
        data    = request.json()['data']

        if not data:
            print 'No data for ' + elective['department'] + elective['code']
            break

        # Parse terms_offered into integers
        termsOffered = []
        for term in data['terms_offered']:
            season = -1
            if term == "W":
                season = 0
            elif term == "S":
                season = 1
            elif term == "F":
                season = 2
            termsOffered.append(season)

        elective['name']           = data['title']
        elective['prerequisites']  = data['prerequisites']
        elective['antirequisites'] = data['antirequisites']
        elective['description']    = data['description']
        elective['terms_offered']  = termsOffered
        elective['review_link']    = UWFLOW_URL + elective['department'].lower() + elective['code'].lower()

        print 'F ' + elective['department'] + elective['code']

# Save result
output = yaml.safe_dump(electivesList, encoding='utf-8', allow_unicode=True)
f = open(OUTPUT_FILE, 'w')
f.write(output)
