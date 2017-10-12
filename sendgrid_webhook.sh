function localtunnel {
  lt -s liucaiyun423 --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done