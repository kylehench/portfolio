FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    && pip install --no-cache-dir pipenv \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY Pipfile* ./
RUN pipenv install --deploy --ignore-pipfile

COPY . .

EXPOSE 5000

CMD ["pipenv", "run", "gunicorn", "--bind", "0.0.0.0:5000", "wsgi:application"]