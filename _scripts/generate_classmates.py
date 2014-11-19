import requests
import yaml

# Constants
GITHUB_API_URL = 'https://api.github.com/orgs/inseption/members'
OUTPUT_FILE = '_data/classmates.yaml'

def getJSON(url):
    r = requests.get(url)
    return r.json()

# Fetch member data from GitHub API
outputArray = []
members = getJSON(GITHUB_API_URL)
for member in members:
    memberDetails = getJSON(member['url'])
    outputArray.append({
        'avatar_url'  : (memberDetails['avatar_url'] or '').strip(),
        'github_name' : (memberDetails['login'] or '').strip(),
        'github_url'  : (memberDetails['html_url'] or '').strip(),
        'name'        : (memberDetails['name'] or '').strip(),
        'company'     : (memberDetails['company'] or '').strip(),
        'website'     : (memberDetails['blog'] or '').strip(),
        'location'    : (memberDetails['location'] or '').strip(),
    });

outputArray.sort(key=lambda x: x['name'])

# Save result
output = yaml.safe_dump(outputArray, encoding='utf-8', allow_unicode=True)
f = open(OUTPUT_FILE, 'w')
f.write(output)
