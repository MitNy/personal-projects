# -*- coding: utf-8 -*-

import openpyxl
import mysql.connector
import os

result = []
def excel_to_list(filename):
	wb = openpyxl.load_workbook(filename)
	ws = wb.active
	tmp_data = []
	for r in ws.rows:
		name = r[1].value
		stuNum = r[2].value

		if name is not None and str(stuNum).isdigit():
			tmp_data.append(str(stuNum)[2:4])
			tmp_data.append(name)
		if len(tmp_data) == 2:
			result.append(tuple(tmp_data))
			tmp_data = []
	print(tuple(result))


def mysql_insert(db,table,data):
	#try:
	cursor = db.cursor()
	sql = "INSERT INTO "+table+" (stuNum,name) VALUES (%s, %s)"
	cursor.executemany(sql,data)
	db.commit()
	#except:
	#	print(
	#	print("[-] Failed Insert\n")
	#finally:
	#	db.close()

def table_clear(db,table):
	try:
		cursor = db.cursor()
		cursor.execute("TRUNCATE TABLE "+table)
		db.close()
	except:
		print("[-] truncate error\n")

def fileCheck(filename):
	return os.path.isfile("./"+filename)

def main():
	db = mysql.connector.connect(
		host="localhost",
		user="root",
		passwd="skaksdkfdk",
		database="mitny"
	)
	print(db)
	print("세미나 랜덤지목")
	while True:
		filename = input("1. 엑셀 파일명 입력 : ")
		if fileCheck(filename) is True:
			table = input("3. 데이터베이스 테이블명 입력 : ")
			excel_to_list(filename)
			mysql_insert(db,table,result)
		else:
			print("파일이 존재하지 않습니다.")
			continue

if __name__ == "__main__":
    main()
