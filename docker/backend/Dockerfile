# デプロイ用コンテナに含めるバイナリを作成するコンテナ
FROM golang:1.18.2-bullseye as deploy-builder

WORKDIR /app/backend

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -trimpath -ldflags "-w -s" -o app

# デプロイ用コンテナ
FROM debian:bullseye as deploy

RUN apt-get update

COPY --from=deploy-builder /app/backend .

CMD ["./app"]

# ローカル開発環境で利用するホットリロード環境
FROM golang:1.18.2 as dev

WORKDIR /app/backend

RUN go install github.com/cosmtrek/air@latest

CMD ["air"]