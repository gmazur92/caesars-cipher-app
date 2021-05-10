# Caesar cipher CLI tool

**This CLI tool is designed to encode and decode a text.**

Encryption is based on an alphabet shift (move of letters back and forth in the alphabet). A letter can be replaced with only one other.
The tool is only works with English alphabet (both uppercase and lowercase), all other characters kept untouched.

## Installation

1. Clone the repository into your system:
 ```bash
 $ git clone git@github.com:gmazur92/caesars-cipher-app.git --branch caesars-cipher-task
  ```
2. Go into the newly created `caesars-cipher-app` directory.
3. Install dependencies:
```bash
$ npm install
```
4. Go into caesar-cli directory
```bash
$ cd caesar-cli
```
5. **Caesar cipher CLI tool** is ready for use.

## Usage

The tool may accept 4 different parameters:

1.  **-a** or **--action** - only takes certain values: **encode** or **decode**. This parameter is **required**.
2.  **-s** or **--shift** - accepts any positive or negative integer. This parameter is **required**.
3.  **-i** or **--input** - Path to the file, could be absolute or relative. Optional parameter.
    If input is not provided, the tool will require an input from the command line.
4.  **-o** or **--output** - Path to the file, could be absolute or relative. Optional parameter.
    If output is not provided, the tool will write the output into the command line.

## Examples:

1. **Encode**:
```bash
$ node caesar-cli -a encode -s 7 -i "../input.txt" -o "../output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

2. **Decode**:
```bash
$ node caesar-cli -a decode -s 7 -i "../input.txt" -o "../output.txt"
```

> input.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

> output.txt
> `This is secret. Message about "_" symbol!`
3. **Negative shift**:
```bash
$ node caesar-cli -a encode -s -1 -i "../input.txt" -o "../output.txt"
```
> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
