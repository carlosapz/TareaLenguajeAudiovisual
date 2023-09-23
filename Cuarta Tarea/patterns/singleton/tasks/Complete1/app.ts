// app.ts

import { LoggerService } from './loggerService';

let logger1 = LoggerService.getInstance("log.txt");
let logger2 = LoggerService.getInstance("log.txt");

logger1.logMessage("This is a message from logger1");
logger2.logMessage("This is a message from logger2");
