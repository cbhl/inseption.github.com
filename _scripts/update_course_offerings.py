import yaml

SOURCE_FILE = '../_data/electives.yaml'
OUTPUT_FILE = '../_data/electives_generated.yaml'

stream = open(SOURCE_FILE)
electivesList = yaml.load(stream)

for category in electivesList:
    for elective in category['electives']:
        elective['season'] = -1

output = yaml.safe_dump(electivesList, encoding='utf-8', allow_unicode=True)
f = open('workfile', 'w')
f.write(output)
