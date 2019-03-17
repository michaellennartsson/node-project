# Info

## Page URL: https://cryptic-bastion-45117.herokuapp.com/

## WebAssembly
* https://emscripten.org/
* Run file C:\Users\milen1\Visual_Studio_Code_Pjojects\emsdk\emsdk_env.bat fefore start working

* Build commands:
 * cd client/public/lib
 * emcc positions.c -s WASM=1 -o positions.js -O

* Wrap functions from C in JS:
 * const greet = cwrap('greet', 'string', ['string']);