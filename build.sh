rm -rf ./build &&
mkdir ./build &&
webpack &&
cp -R ./server ./build/server &&
cp -R ./public ./build/ &&
cp  ./package.json ./build/package.json &&
cd build &&
npm i --production &&
cd .. &&
tar -zcvf build.tar.gz build/*
