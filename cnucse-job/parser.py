import requests
import re
from bs4 import BeautifulSoup
url = "http://computer.cnu.ac.kr/index.php?mid=job"

request = requests.get(url)

html = request.text
soup = BeautifulSoup(html,"html.parser")

table = soup.find("tbody")

#'(.*?)\

title_data = []
time_data = []
# 타이틀만 가져옴
#for t in table.find_all("a"):
#	text_data = t.get_text().replace("\t","")
#	for i in text_data.split("\n"):
#		if i is not "":
#			title_data.append(i)

# 시간만 가져옴
#for t in table.find_all("td",["time"]):
#	text_data = t.get_text()
#	for i in text_data.split("\n"):
#		if i is not "":
#			time_data.append(i)


parse_data = []
for t in table.find_all("td",["title","time"]):
	text_data = t.get_text().replace("\t","")
	for i in text_data.split("\n"):
		if i is not "":
			parse_data.append(i)


# time/title key 딕셔너리 생성 후 리스트에 넣음
result = []
dic_data = {}
for i in range(0,len(parse_data)):
	regex = re.compile(r"([12]\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]))")
	m = regex.match(parse_data[i])
	if m:
		dic_data["time"] = m.group()
	else:
		dic_data["title"] = parse_data[i]

	if len(dic_data) == 2:
		result.append(dic_data)
		dic_data = {}
