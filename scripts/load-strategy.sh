#!/bin/bash

# blow away old-contracts
rm -rf contracts/strategy

echo "Copying latest contracts..."
cp -rf strategy contracts/

echo "Done!"
