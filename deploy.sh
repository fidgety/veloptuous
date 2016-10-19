scp ./build.tar.gz root@139.59.169.252:/var/veloptuous &&
ssh root@139.59.169.252 &&
stop veloptuous &&
cd /var/veloptuous &&
tar xvzf build.tar.gz &&
start veloptuous
