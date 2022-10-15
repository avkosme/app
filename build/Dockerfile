FROM ghcr.io/avkosme/hugo-dev:arm as builder
WORKDIR /source
COPY . .

# `skaffold debug` sets SKAFFOLD_GO_GCFLAGS to disable compiler optimizations
ARG SKAFFOLD_GO_GCFLAGS
RUN CGO_ENABLED=0 go build -ldflags "-s -w" -gcflags="${SKAFFOLD_GO_GCFLAGS}" -o /main cmd/main.go

FROM ghcr.io/avkosme/hugo-dev:arm
WORKDIR /opt/
COPY --from=builder /source .

RUN chmod +x /opt/build/init.sh
COPY --from=builder /main .
ENTRYPOINT ["/opt/build/init.sh"]

