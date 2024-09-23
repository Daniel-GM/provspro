import requests
from bs4 import BeautifulSoup
import json

url = 'https://gol.gg/teams/list/season-S14/split-Summer/tournament-ALL/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'}

response = requests.get(url, headers=headers)

if(response.status_code == 200):
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', class_='table_list')
    
    headers = [th.get_text(strip=True) for th in table.find_all('th')]
    
    table_data = {header: [] for header in headers}

    for row in table.find_all('tr')[1:]:
        cells = row.find_all('td')
        if len(cells) > 0:
            for idx, cell in enumerate(cells):
                table_data[headers[idx]].append(cell.get_text(strip=True))

    with open('./src/data/todos_times.json', 'w', encoding='utf-8') as json_file:
        json.dump(table_data, json_file, ensure_ascii=False, indent=4)

    print("Dados salvos em 'todos_times.json'")
else:
    print(f"Erro ao acessar a página: {response.status_code}")