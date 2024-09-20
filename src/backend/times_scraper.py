import requests
from bs4 import BeautifulSoup

url = 'https://gol.gg/teams/list/season-S14/split-Summer/tournament-ALL/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

response = requests.get(url, headers=headers)

if(response.status_code == 200):
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', class_='table_list')
    
    print(table)