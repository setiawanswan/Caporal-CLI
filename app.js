#!/usr/bin/env node

const { program } = require("@caporal/core")


program
    .argument('message', 'Description')
    .action(({ args, logger }) => {
    // console.log("Hello")
    logger.info(args.message)
})


program.run()