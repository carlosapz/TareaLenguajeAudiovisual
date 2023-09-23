// app.ts

import { DatabaseService } from './dbService';

const dbService1 = DatabaseService.getInstance("mongodb://localhost/db1");
const dbService2 = DatabaseService.getInstance("mongodb://localhost/db1"); 

dbService1.connect();
dbService2.connect();
