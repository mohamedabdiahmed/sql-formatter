import { expandPhrases } from 'src/expandPhrases';
import Formatter from 'src/formatter/Formatter';
import Tokenizer from 'src/lexer/Tokenizer';
import { functions } from './tsql.functions';
import { keywords } from './tsql.keywords';

const reservedCommands = expandPhrases([
  // queries
  'WITH',
  'SELECT [ALL | DISTINCT]',
  'FROM',
  'WHERE',
  'GROUP BY',
  'HAVING',
  'WINDOW',
  'PARTITION BY',
  'ORDER BY',
  'OFFSET',
  'FETCH {FIRST | NEXT}',
  // Data manipulation
  // - insert:
  'INSERT [INTO]',
  'VALUES',
  // - update:
  'UPDATE',
  'SET',
  'WHERE CURRENT OF',
  // - delete:
  'DELETE [FROM]',
  // - truncate:
  'TRUNCATE TABLE',
  // - merge:
  'MERGE [INTO]',
  'WHEN [NOT] MATCHED [BY TARGET | BY SOURCE] [THEN]',
  'UPDATE SET',
  // Data definition
  'CREATE [OR ALTER] [MATERIALIZED] VIEW',
  'CREATE TABLE',
  'DROP TABLE [IF EXISTS]',
  // - alter table:
  'ALTER TABLE',
  'ADD',
  'DROP COLUMN [IF EXISTS]',
  'ALTER COLUMN',

  // https://docs.microsoft.com/en-us/sql/t-sql/statements/statements?view=sql-server-ver15
  'ADD SENSITIVITY CLASSIFICATION',
  'ADD SIGNATURE',
  'AGGREGATE',
  'ANSI_DEFAULTS',
  'ANSI_NULLS',
  'ANSI_NULL_DFLT_OFF',
  'ANSI_NULL_DFLT_ON',
  'ANSI_PADDING',
  'ANSI_WARNINGS',
  'APPLICATION ROLE',
  'ARITHABORT',
  'ARITHIGNORE',
  'ASSEMBLY',
  'ASYMMETRIC KEY',
  'AUTHORIZATION',
  'AVAILABILITY GROUP',
  'BACKUP',
  'BACKUP CERTIFICATE',
  'BACKUP MASTER KEY',
  'BACKUP SERVICE MASTER KEY',
  'BEGIN CONVERSATION TIMER',
  'BEGIN DIALOG CONVERSATION',
  'BROKER PRIORITY',
  'BULK INSERT',
  'CERTIFICATE',
  'CLOSE MASTER KEY',
  'CLOSE SYMMETRIC KEY',
  'COLLATE',
  'COLUMN ENCRYPTION KEY',
  'COLUMN MASTER KEY',
  'COLUMNSTORE INDEX',
  'CONCAT_NULL_YIELDS_NULL',
  'CONTEXT_INFO',
  'CONTRACT',
  'CREDENTIAL',
  'CRYPTOGRAPHIC PROVIDER',
  'CURSOR_CLOSE_ON_COMMIT',
  'DATABASE',
  'DATABASE AUDIT SPECIFICATION',
  'DATABASE ENCRYPTION KEY',
  'DATABASE HADR',
  'DATABASE SCOPED CONFIGURATION',
  'DATABASE SCOPED CREDENTIAL',
  'DATABASE SET',
  'DATEFIRST',
  'DATEFORMAT',
  'DEADLOCK_PRIORITY',
  'DENY',
  'DENY XML',
  'DISABLE TRIGGER',
  'ENABLE TRIGGER',
  'END CONVERSATION',
  'ENDPOINT',
  'EVENT NOTIFICATION',
  'EVENT SESSION',
  'EXECUTE AS',
  'EXTERNAL DATA SOURCE',
  'EXTERNAL FILE FORMAT',
  'EXTERNAL LANGUAGE',
  'EXTERNAL LIBRARY',
  'EXTERNAL RESOURCE POOL',
  'EXTERNAL TABLE',
  'FIPS_FLAGGER',
  'FMTONLY',
  'FORCEPLAN',
  'FULLTEXT CATALOG',
  'FULLTEXT INDEX',
  'FULLTEXT STOPLIST',
  'FUNCTION',
  'GET CONVERSATION GROUP',
  'GET_TRANSMISSION_STATUS',
  'GRANT',
  'GRANT XML',
  'IDENTITY_INSERT',
  'IMPLICIT_TRANSACTIONS',
  'INDEX',
  'LANGUAGE',
  'LOCK_TIMEOUT',
  'LOGIN',
  'MASTER KEY',
  'MESSAGE TYPE',
  'MOVE CONVERSATION',
  'NOCOUNT',
  'NOEXEC',
  'NUMERIC_ROUNDABORT',
  'OFFSETS',
  'OPEN MASTER KEY',
  'OPEN SYMMETRIC KEY',
  'PARSEONLY',
  'PARTITION FUNCTION',
  'PARTITION SCHEME',
  'PROCEDURE',
  'QUERY_GOVERNOR_COST_LIMIT',
  'QUEUE',
  'QUOTED_IDENTIFIER',
  'RECEIVE',
  'REMOTE SERVICE BINDING',
  'REMOTE_PROC_TRANSACTIONS',
  'RESOURCE GOVERNOR',
  'RESOURCE POOL',
  'RESTORE',
  'RESTORE FILELISTONLY',
  'RESTORE HEADERONLY',
  'RESTORE LABELONLY',
  'RESTORE MASTER KEY',
  'RESTORE REWINDONLY',
  'RESTORE SERVICE MASTER KEY',
  'RESTORE VERIFYONLY',
  'REVERT',
  'REVOKE',
  'REVOKE XML',
  'ROLE',
  'ROUTE',
  'ROWCOUNT',
  'RULE',
  'SCHEMA',
  'SEARCH PROPERTY LIST',
  'SECURITY POLICY',
  'SELECTIVE XML INDEX',
  'SEND',
  'SENSITIVITY CLASSIFICATION',
  'SEQUENCE',
  'SERVER AUDIT',
  'SERVER AUDIT SPECIFICATION',
  'SERVER CONFIGURATION',
  'SERVER ROLE',
  'SERVICE',
  'SERVICE MASTER KEY',
  'SETUSER',
  'SHOWPLAN_ALL',
  'SHOWPLAN_TEXT',
  'SHOWPLAN_XML',
  'SIGNATURE',
  'SPATIAL INDEX',
  'STATISTICS',
  'STATISTICS IO',
  'STATISTICS PROFILE',
  'STATISTICS TIME',
  'STATISTICS XML',
  'SYMMETRIC KEY',
  'SYNONYM',
  'TABLE',
  'TABLE IDENTITY',
  'TEXTSIZE',
  'TRANSACTION ISOLATION LEVEL',
  'TRIGGER',
  'TYPE',
  'UPDATE STATISTICS',
  'USER',
  'WORKLOAD GROUP',
  'XACT_ABORT',
  'XML INDEX',
  'XML SCHEMA COLLECTION',
]);

const reservedSetOperations = expandPhrases(['UNION [ALL]', 'EXCEPT', 'INTERSECT']);

const reservedJoins = expandPhrases([
  'JOIN',
  '{LEFT | RIGHT | FULL} [OUTER] JOIN',
  '{INNER | CROSS} JOIN',
  // non-standard joins
  '{CROSS | OUTER} APPLY',
]);

const reservedPhrases = ['ON DELETE', 'ON UPDATE'];

// https://docs.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver15
export default class TSqlFormatter extends Formatter {
  static operators = ['~', '!<', '!>', '+=', '-=', '*=', '/=', '%=', '|=', '&=', '^=', '::'];

  tokenizer() {
    return new Tokenizer({
      reservedCommands,
      reservedSetOperations,
      reservedJoins,
      reservedDependentClauses: ['WHEN', 'ELSE'],
      reservedPhrases,
      reservedKeywords: keywords,
      reservedFunctionNames: functions,
      stringTypes: [{ quote: "''", prefixes: ['N'] }],
      identTypes: [`""`, '[]'],
      identChars: { first: '#@', rest: '#@$' },
      namedParamTypes: ['@'],
      quotedParamTypes: ['@'],
      operators: TSqlFormatter.operators,
      // TODO: Support for money constants
    });
  }
}
