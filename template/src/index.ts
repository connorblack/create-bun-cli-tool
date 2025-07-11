import { Command } from "commander";
import ora from "ora";

const program = new Command();
program
  .name("mycli")
  .description("Example bun CLI tool")
  .version("0.1.0");

program
  .command("hello")
  .description("Print hello")
  .action(() => {
    const spinner = ora("Processing...").start();
    setTimeout(() => {
      spinner.succeed("Hello from bun CLI!");
    }, 500);
  });

program.parse(process.argv);
