#!/bin/bash

# blow away old ytc contracts
rm -rf contracts/ytc

echo "Copying latest ytc contracts..."
cp -rf ytc contracts/

echo "Done with Yield Token Compounding!"
