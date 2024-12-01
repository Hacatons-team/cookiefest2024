from fastapi import FastAPI

from db import Database

app = FastAPI()


@app.get("/employer/sales/{id}")
async def employer_sales(id_: int):
    db = Database("database.db")
    data = db.get_employ_sales(id_)
    res = [
        {
            "id": data[i][0],
            "sales_amount": data[i][6],
            "bonus": data[i][6] * 0.15,
            "good": data[i][3],
            "client": data[i][2],
            "date": data[i][5] 
        }
        for i in range(len(data))
    ]
    return res


@app.get("/top/branches/")
async def top_branches():
    db = Database("database.db")
    data = db.branches_top()
    res = [
        {
            "branch": data[i][0],
            "all_sales_amount": data[i][1],
            "summary_bonus": data[i][2],
            "id": data[i][3],
        }
        for i in range(len(data))
    ]
    return res



@app.get("/top/employers/")
async def top_employers():
    db = Database("database.db")
    data = db.employers_top("Москва")
    res = [
        {
            "name": data[i][0],
            "sales_amount": data[i][1],
            "summary_bonus": data[i][2],
            "id": data[i][3],
        }
        for i in range(len(data))
    ]
    return res


@app.post("/add_sale")
async def add_sale(client_id: int, employer_id: int, good: str, amount: int, sales_amount: float):
    db = Database("database.db")
    try:
        db.add_sale(client_id, employer_id, good, amount, sales_amount)
        return {"status": "ok"}
    except Exception as ex:
        return {"status": "error", "msg": ex}