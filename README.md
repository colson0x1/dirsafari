# dirSafari

This is a simple Node.js terminal application that lists files and folders in a directory. It uses the `fs` module from Node.js to read the directory contents and display them in the terminal. The app also utilizes the `chalk` library for colorful output.

## Requirements

- Node.js (version 12 or higher) should be installed on your machine. You can download it from [here](https://nodejs.org).

## RUN as NPM Module

```
$ npm install -g dirsafari
// To EXECUTE DirSafari:
$ ds
OR
$ ds [directory]
OR
$ nodeds [directory]
OR
$ dirsafari [directory]
```

## Installation from git repository

1. Clone the repository or download the source code.

```bash
$ git clone https://github.com/colson0x1/dirsafari.git
```

2. Open a terminal and navigate to the project directory.

```bash
$ cd dirsafari
```

3. Give the app executable permission by running the following command:

```bash
$ chmod +x app.js
```

4. Install the required dependencies using npm:

```bash
$ npm install
```

5. Run the following command with sudo:

```bash
$ sudo npm link
```

This will create a symbolic link for the app.js file, allowing you to run the app from any directory (globally) by typing `ds` in the terminal.

## Usage

To run the app, use the following command:

```bash
$ ds
OR
$ ds [directory]
OR
$ nodeds [directory]
OR
$ dirsafari [directory]
```

Replace `[directory]` with the path to the directory you want to list. If no directory is specified, the app will use the current working directory.

The app will display the list of files and folders in the specified directory, with files displayed in orange and folders displayed in blue. Folders will be displayed in bold text.

## Example

To list the files and folders in the current directory, run:

```bash
$ node-ds
```

To list the files and folders in a specific directory, run:

```bash
$ node-ds /path/to/directory
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgment

I would like to acknowledge the following resources and libraries that were used in the development of this app:

- [Node.js](https://nodejs.org)
- [chalk](https://www.npmjs.com/package/chalk)

## Screenshots

![dirsafari node-ds](https://i.imgur.com/yjBmMo0.png)

![dirsafari node-ds /](https://i.imgur.com/pH9vmMl.png)

![dirsafari node-ds /Users](https://i.imgur.com/FTs5F2m.png)
