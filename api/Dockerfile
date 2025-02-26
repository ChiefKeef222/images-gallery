FROM python:3.11

WORKDIR /app

COPY Pipfile Pipfile.lock ./

RUN pip install --upgrade pip && pip install --upgrade pipenv
RUN pipenv install --deploy --system  

COPY . ./

CMD ["python", "main.py"]


