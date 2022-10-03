import { flatKeywordList } from '../../utils.js';

export const keywords = flatKeywordList({
  // https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-parser/src/main/antlr4/io/trino/sql/parser/SqlBase.g4#L858-L1128
  all: [
    'ABSENT',
    'ADD',
    'ADMIN',
    'AFTER',
    'ALL',
    'ALTER',
    'ANALYZE',
    'AND',
    'ANY',
    'ARRAY',
    'AS',
    'ASC',
    'AT',
    'AUTHORIZATION',
    'BERNOULLI',
    'BETWEEN',
    'BOTH',
    'BY',
    'CALL',
    'CASCADE',
    'CASE',
    'CATALOGS',
    'COLUMN',
    'COLUMNS',
    'COMMENT',
    'COMMIT',
    'COMMITTED',
    'CONDITIONAL',
    'CONSTRAINT',
    'COPARTITION',
    'CREATE',
    'CROSS',
    'CUBE',
    'CURRENT',
    'CURRENT_PATH',
    'CURRENT_ROLE',
    'DATA',
    'DEALLOCATE',
    'DEFAULT',
    'DEFINE',
    'DEFINER',
    'DELETE',
    'DENY',
    'DESC',
    'DESCRIBE',
    'DESCRIPTOR',
    'DISTINCT',
    'DISTRIBUTED',
    'DOUBLE',
    'DROP',
    'ELSE',
    'EMPTY',
    'ENCODING',
    'END',
    'ERROR',
    'ESCAPE',
    'EXCEPT',
    'EXCLUDING',
    'EXECUTE',
    'EXISTS',
    'EXPLAIN',
    'FALSE',
    'FETCH',
    'FINAL',
    'FIRST',
    'FOLLOWING',
    'FOR',
    'FROM',
    'FULL',
    'FUNCTIONS',
    'GRANT',
    'GRANTED',
    'GRANTS',
    'GRAPHVIZ',
    'GROUP',
    'GROUPING',
    'GROUPS',
    'HAVING',
    'IGNORE',
    'IN',
    'INCLUDING',
    'INITIAL',
    'INNER',
    'INPUT',
    'INSERT',
    'INTERSECT',
    'INTERVAL',
    'INTO',
    'INVOKER',
    'IO',
    'IS',
    'ISOLATION',
    'JOIN',
    'JSON',
    'JSON_ARRAY',
    'JSON_OBJECT',
    'KEEP',
    'KEY',
    'KEYS',
    'LAST',
    'LATERAL',
    'LEADING',
    'LEFT',
    'LEVEL',
    'LIKE',
    'LIMIT',
    'LOCAL',
    'LOGICAL',
    'MATCH',
    'MATCHED',
    'MATCHES',
    'MATCH_RECOGNIZE',
    'MATERIALIZED',
    'MEASURES',
    'NATURAL',
    'NEXT',
    'NFC',
    'NFD',
    'NFKC',
    'NFKD',
    'NO',
    'NONE',
    'NOT',
    'NULL',
    'NULLS',
    'OBJECT',
    'OF',
    'OFFSET',
    'OMIT',
    'ON',
    'ONE',
    'ONLY',
    'OPTION',
    'OR',
    'ORDER',
    'ORDINALITY',
    'OUTER',
    'OUTPUT',
    'OVER',
    'OVERFLOW',
    'PARTITION',
    'PARTITIONS',
    'PASSING',
    'PAST',
    'PATH',
    'PATTERN',
    'PER',
    'PERMUTE',
    'PRECEDING',
    'PRECISION',
    'PREPARE',
    'PRIVILEGES',
    'PROPERTIES',
    'PRUNE',
    'QUOTES',
    'RANGE',
    'READ',
    'RECURSIVE',
    'REFRESH',
    'RENAME',
    'REPEATABLE',
    'RESET',
    'RESPECT',
    'RESTRICT',
    'RETURNING',
    'REVOKE',
    'RIGHT',
    'ROLE',
    'ROLES',
    'ROLLBACK',
    'ROLLUP',
    'ROW',
    'ROWS',
    'RUNNING',
    'SCALAR',
    'SCHEMA',
    'SCHEMAS',
    'SECURITY',
    'SEEK',
    'SELECT',
    'SERIALIZABLE',
    'SESSION',
    'SET',
    'SETS',
    'SHOW',
    'SKIP',
    'SOME',
    'START',
    'STATS',
    'STRING',
    'SUBSET',
    'SYSTEM',
    'TABLE',
    'TABLES',
    'TABLESAMPLE',
    'TEXT',
    'THEN',
    'TIES',
    'TIME',
    'TIMESTAMP',
    'TO',
    'TRAILING',
    'TRANSACTION',
    'TRUE',
    'TYPE',
    'UESCAPE',
    'UNBOUNDED',
    'UNCOMMITTED',
    'UNCONDITIONAL',
    'UNION',
    'UNIQUE',
    'UNKNOWN',
    'UNMATCHED',
    'UNNEST',
    'UPDATE',
    'USE',
    'USER',
    'USING',
    'UTF16',
    'UTF32',
    'UTF8',
    'VALIDATE',
    'VALUE',
    'VALUES',
    'VERBOSE',
    'VIEW',
    'WHEN',
    'WHERE',
    'WINDOW',
    'WITH',
    'WITHIN',
    'WITHOUT',
    'WORK',
    'WRAPPER',
    'WRITE',
    'ZONE',
  ],
  // https://github.com/trinodb/trino/blob/432d2897bdef99388c1a47188743a061c4ac1f34/core/trino-main/src/main/java/io/trino/metadata/TypeRegistry.java#L131-L168
  // or https://trino.io/docs/current/language/types.html
  types: [
    'BIGINT',
    'INT',
    'INTEGER',
    'SMALLINT',
    'TINYINT',
    'BOOLEAN',
    'DATE',
    'DECIMAL',
    'REAL',
    'DOUBLE',
    'HYPERLOGLOG',
    'QDIGEST',
    'TDIGEST',
    'P4HYPERLOGLOG',
    'INTERVAL',
    'TIMESTAMP',
    'TIME',
    'VARBINARY',
    'VARCHAR',
    'CHAR',
    'ROW',
    'ARRAY',
    'MAP',
    'JSON',
    'JSON2016',
    'IPADDRESS',
    'GEOMETRY',
    'UUID',
    'SETDIGEST',
    'JONIREGEXP',
    'RE2JREGEXP',
    'LIKEPATTERN',
    'COLOR',
    'CODEPOINTS',
    'FUNCTION',
    'JSONPATH',
  ],
});
