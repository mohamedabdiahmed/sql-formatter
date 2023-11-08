import { DialectOptions } from '../../dialect.js';
import { expandPhrases } from '../../expandPhrases.js';
import { functions } from './db2i.functions.js';
import { keywords } from './db2i.keywords.js';

const reservedSelect = expandPhrases(['SELECT [ALL | DISTINCT]']);

const reservedClauses = expandPhrases([
  // queries
  'WITH',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'PARTITION BY',
  'ORDER [SIBLINGS] BY [INPUT SEQUENCE]',
  'OFFSET {ROW | ROWS}',
  'FETCH {FIRST | NEXT} {ROW | ROWS} ONLY',
  'LIMIT',
  'FOR UPDATE [OF]',
  'FOR READ ONLY',
  'OPTIMIZE FOR [ALL] {ROW | ROWS}',
  // Data modification
  // - insert:
  'INSERT INTO',
  'VALUES',
  // - update:
  'SET',
  // - merge:
  'MERGE INTO',
  'WHEN [NOT] MATCHED [THEN]',
  'UPDATE SET',
  'DELETE',
  'INSERT',
  // Data definition
  'CREATE [OR REPLACE] TABLE [FOR SYSTEM NAME]',
  'CREATE [OR REPLACE] [RECURSIVE] VIEW [FOR SYSTEM NAME]',
]);

const onelineClauses = expandPhrases([
  // - update:
  'UPDATE',
  'WHERE CURRENT OF',
  'WITH {NC | RR | RS | CS | UR}',
  // - delete:
  'DELETE FROM',
  // - drop table:
  'DROP TABLE',
  // alter table:
  'ALTER TABLE',
  'ADD [COLUMN]',
  'ALTER [COLUMN]',
  'DROP [COLUMN]',
  'RENAME [COLUMN]',
  'SET DATA TYPE', // for alter column
  'SET {GENERATED ALWAYS | GENERATED BY DEFAULT}', // for alter column
  'SET NOT NULL', // for alter column
  'SET {NOT HIDDEN | IMPLICITLY HIDDEN}', // for alter column
  'SET FIELDPROC', // for alter column
  'DROP {DEFAULT | NOT NULL | GENERATED | IDENTITY | ROW CHANGE TIMESTAMP | FIELDPROC}', // for alter column
  // - truncate:
  'TRUNCATE [TABLE]',
  // other
  'SET [CURRENT] SCHEMA',
  // https://www.ibm.com/docs/en/i/7.5?topic=reference-statements
  'ALLOCATE CURSOR',
  'ALLOCATE DESCRIPTOR',
  'ALTER FUNCTION',
  'ALTER MASK',
  'ALTER PERMISSION',
  'ALTER PROCEDURE',
  'ALTER SEQUENCE',
  'ALTER TRIGGER',
  'ASSOCIATE LOCATORS',
  'BEGIN DECLARE SECTION',
  'CALL',
  'CLOSE',
  'COMMENT',
  'COMMIT',
  'CONNECT',
  'CREATE [OR REPLACE] ALIAS',
  'CREATE [OR REPLACE] FUNCTION',
  'CREATE INDEX',
  'CREATE [OR REPLACE] MASK',
  'CREATE [OR REPLACE] PERMISSION',
  'CREATE [OR REPLACE] PROCEDURE',
  'CREATE SCHEMA',
  'CREATE [OR REPLACE] SEQUENCE',
  'CREATE [OR REPLACE] TRIGGER',
  'CREATE TYPE',
  'CREATE [OR REPLACE] VARIABLE',
  'DEALLOCATE DESCRIPTOR',
  'DECLARE CURSOR',
  'DECLARE GLOBAL TEMPORARY TABLE',
  'DECLARE PROCEDURE',
  'DECLARE STATEMENT',
  'DECLARE VARIABLE',
  'DESCRIBE',
  'DESCRIBE CURSOR',
  'DESCRIBE INPUT',
  'DESCRIBE OUTPUT',
  'DESCRIBE PROCEDURE',
  'DESCRIBE TABLE',
  'DISCONNECT',
  'DROP',
  'END DECLARE SECTION',
  'EXECUTE',
  'EXECUTE IMMEDIATE',
  'FETCH',
  'FREE LOCATOR',
  'GET DESCRIPTOR',
  'GET DIAGNOSTICS',
  'GRANT',
  'HOLD LOCATOR',
  'INCLUDE',
  'INSERT',
  'LABEL',
  'LOCK TABLE',
  'OPEN',
  'PREPARE',
  'REFRESH TABLE',
  'RELEASE',
  'RELEASE SAVEPOINT',
  'RENAME',
  'REVOKE',
  'ROLLBACK',
  'SAVEPOINT',
  'SELECT',
  'SELECT INTO',
  'SET CONNECTION',
  'SET CURRENT DEBUG MODE',
  'SET CURRENT DECFLOAT ROUNDING MODE',
  'SET CURRENT DEGREE',
  'SET CURRENT IMPLICIT XMLPARSE OPTION',
  'SET CURRENT TEMPORAL SYSTEM_TIME',
  'SET DESCRIPTOR',
  'SET ENCRYPTION PASSWORD',
  'SET OPTION',
  'SET PATH',
  'SET RESULT SETS',
  'SET SESSION AUTHORIZATION',
  'SET TRANSACTION',
  'SET',
  'SIGNAL',
  'TAG',
  'TRANSFER OWNERSHIP',
  'TRUNCATE',
  'UPDATE',
  'VALUES',
  'VALUES INTO',
  'WHENEVER',
]);

const reservedSetOperations = expandPhrases(['UNION [ALL]', 'EXCEPT [ALL]', 'INTERSECT [ALL]']);

const reservedJoins = expandPhrases([
  'JOIN',
  '{LEFT | RIGHT | FULL} [OUTER] JOIN',
  '{LEFT | RIGHT } EXCEPTION JOIN',
  '{INNER | CROSS} JOIN',
]);

const reservedPhrases = expandPhrases([
  'ON DELETE',
  'ON UPDATE',
  'SET NULL',
  '{ROWS | RANGE} BETWEEN',
]);

// https://www.ibm.com/docs/en/i/7.5?topic=reference-sql
export const db2i: DialectOptions = {
  tokenizerOptions: {
    reservedSelect,
    reservedClauses: [...reservedClauses, ...onelineClauses],
    reservedSetOperations,
    reservedJoins,
    reservedPhrases,
    reservedKeywords: keywords,
    reservedFunctionNames: functions,
    stringTypes: [
      { quote: "''-qq", prefixes: ['G', 'N', 'U&'] },
      { quote: "''-raw", prefixes: ['X', 'BX', 'GX', 'UX'], requirePrefix: true },
    ],
    identTypes: [`""-qq`],
    identChars: { first: '@#$' },
    paramTypes: { positional: true, named: [':'] },
    paramChars: { first: '@#$', rest: '@#$' },
    operators: ['**', '¬=', '¬>', '¬<', '!>', '!<', '||', 'CONCAT'],
  },
  formatOptions: {
    onelineClauses,
  },
};
