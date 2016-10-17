rm -rf ./build &&
mkdir ./build &&
webpack &&
cp -R ./server ./build/server &&
#cp -R ./public ./build/public &&
cp  ./package.json ./build/package.json &&
cd build &&
npm i --production &&
cd .. &&
tar -zcvf deploy.tar.gz build/*
