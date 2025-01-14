# Expense-Tracer
Expense Tracer is a simple expense tracker application to manage your finances. For project details Read this [Expense Tracer by Roadmap.sh](https://roadmap.sh/projects/expense-tracker)

## Installation

```bash
git clone https://github.com/nebulisx-roadmap/Expense-Tracer.git
bun install
bun link
```
Or you can use our binary files from release page.

## Features

- Add expenses
- View expenses
- Remove expenses
- Update expenses
- Summarize expenses

## Usage

You must initialize the database by running the following command:

```bash
$ expense-tracer init
# Output: Database initialized successfully
```

Run the following command to add an expense:

```bash
$ expense-tracer add --description <description> --amount <amount>
$ expense-tracer add --description "Groceries" --amount 50
# Output: Expense added successfully: (ID: 1)
```

Run the following command to view all expenses:

```bash
$ expense-tracer list
# Output:
# Expenses:
# ---------
# ID  Amount  Description
# 1   50      Groceries
```

Run the following command to remove an expense:

```bash
$ expense-tracer remove --id <id>
$ expense-tracer remove --id 1
# Output: Expense removed successfully: (ID: 1)
```

Run the following command to update an expense:

```bash
$ expense-tracer update --id <id> --description <description> --amount <amount>
$ expense-tracer update --id 1 --description "Groceries" --amount 100
# Output: Expense updated successfully: (ID: 1)
```

Run the following command to summarize expenses:

```bash
$ expense-tracer summary [--month <month>]
$ expense-tracer summary --month 1
# Output: Total expenses by month 1: 100
```
<!--
Run the following command to export expenses to CSV:

```bash
expense-tracer export --month <month>
expense-tracer export --month 01
# Output: Expenses exported to expenses-01.csv
```


Run the following command to search expenses:

```bash
expense-tracer search --description <description>
expense-tracer search --description "Groceries"
# Output:
# Expenses:
# ---------
# ID\tAmount\tDescription
# 1\t50\tGroceries
```

Run the following command to filter expenses:

```bash
expense-tracer filter --amount <amount>
expense-tracer filter --amount 50
# Output:
# Expenses:
# ---------
# ID\tAmount\tDescription
# 1\t50\tGroceries
```
-->

Run the following command to view help:

```bash
$ expense-tracer help [command]
```

Run the following command to view version:

```bash
$ expense-tracer --version
```

## Contributing

You can contribute to the project by [forking](https://github.com/nebulisx-roadmap/Expense-Tracer) and [pulling requests](https://github.com/nebulisx-roadmap/Expense-Tracer/pulls).

## License

MIT License [MIT](LICENSE)

## Author

[nebulisx](https://github.com/nebulisx)

## Roadmap

- [x] Add expenses
- [x] View expenses
- [x] Remove expenses
- [x] Update expenses
- [x] Summarize expenses
- [ ] Filter expenses
- [ ] Search expenses
- [ ] Export expenses to CSV
- [ ] Add tests

