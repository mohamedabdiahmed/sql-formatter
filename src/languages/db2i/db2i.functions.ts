import { flatKeywordList } from '../../utils.js';

export const functions = flatKeywordList({
  // https://www.ibm.com/docs/en/i/7.5?topic=functions-aggregate
  aggregate: [
    'ANY',
    'ARRAY_AGG',
    'AVG',
    'CORR',
    'CORRELATION',
    'COUNT',
    'COUNT_BIG',
    'COVAR_POP',
    'COVARIANCE',
    'COVAR',
    'COVAR_SAMP',
    'COVARIANCE_SAMP',
    'EVERY',
    'GROUPING',
    'JSON_ARRAYAGG',
    'JSON_OBJECTAGG',
    'LISTAGG',
    'MAX',
    'MEDIAN',
    'MIN',
    'PERCENTILE_CONT',
    'PERCENTILE_DISC',
    // https://www.ibm.com/docs/en/i/7.5?topic=functions-regression'
    'REGR_AVGX',
    'REGR_AVGY',
    'REGR_COUNT',
    'REGR_INTERCEPT',
    'REGR_R2',
    'REGR_SLOPE',
    'REGR_SXX',
    'REGR_SXY',
    'REGR_SYY',
    'SOME',
    'STDDEV_POP',
    'STDDEV',
    'STDDEV_SAMP',
    'SUM',
    'VAR_POP',
    'VARIANCE',
    'VAR',
    'VAR_SAMP',
    'VARIANCE_SAMP',
    'XMLAGG',
    'XMLGROUP',
  ],
  // https://www.ibm.com/docs/en/i/7.5?topic=functions-scalar
  scalar: [
    'ABS',
    'ABSVAL',
    'ACOS',
    'ADD_DAYS',
    'ADD_HOURS',
    'ADD_MINUTES',
    'ADD_MONTHS',
    'ADD_SECONDS',
    'ADD_YEARS',
    'ANTILOG',
    'ARRAY_MAX_CARDINALITY',
    'ARRAY_TRIM',
    'ASCII',
    'ASIN',
    'ATAN',
    'ATAN2',
    'ATANH',
    'BASE64_DECODE',
    'BASE64_ENCODE',
    'BIGINT',
    'BINARY',
    'BIT_LENGTH',
    'BITAND',
    'BITANDNOT',
    'BITNOT',
    'BITOR',
    'BITXOR',
    'BLOB',
    'BOOLEAN',
    'BSON_TO_JSON',
    'CARDINALITY',
    'CEIL',
    'CEILING',
    'CHAR_LENGTH',
    'CHAR',
    'CHARACTER_LENGTH',
    'CHR',
    'CLOB',
    'COALESCE',
    'COMPARE_DECFLOAT',
    'CONCAT',
    'CONTAINS',
    'COS',
    'COSH',
    'COT',
    'CURDATE',
    'CURTIME',
    'DATABASE',
    'DATAPARTITIONNAME',
    'DATAPARTITIONNUM',
    'DATE',
    'DAY',
    'DAYNAME',
    'DAYOFMONTH',
    'DAYOFWEEK_ISO',
    'DAYOFWEEK',
    'DAYOFYEAR',
    'DAYS',
    'DBCLOB',
    'DBPARTITIONNAME',
    'DBPARTITIONNUM',
    'DEC',
    'DECFLOAT_FORMAT',
    'DECFLOAT_SORTKEY',
    'DECFLOAT',
    'DECIMAL',
    'DECRYPT_BINARY',
    'DECRYPT_BIT',
    'DECRYPT_CHAR',
    'DECRYPT_DB',
    'DEGREES',
    'DIFFERENCE',
    'DIGITS',
    'DLCOMMENT',
    'DLLINKTYPE',
    'DLURLCOMPLETE',
    'DLURLPATH',
    'DLURLPATHONLY',
    'DLURLSCHEME',
    'DLURLSERVER',
    'DLVALUE',
    'DOUBLE_PRECISION',
    'DOUBLE',
    'ENCRPYT',
    'ENCRYPT_AES',
    'ENCRYPT_AES256',
    'ENCRYPT_RC2',
    'ENCRYPT_TDES',
    'EXP',
    'EXTRACT',
    'FIRST_DAY',
    'FLOAT',
    'FLOOR',
    'GENERATE_UNIQUE',
    'GET_BLOB_FROM_FILE',
    'GET_CLOB_FROM_FILE',
    'GET_DBCLOB_FROM_FILE',
    'GET_XML_FILE',
    'GETHINT',
    'GRAPHIC',
    'GREATEST',
    'HASH_MD5',
    'HASH_ROW',
    'HASH_SHA1',
    'HASH_SHA256',
    'HASH_SHA512',
    'HASH_VALUES',
    'HASHED_VALUE',
    'HEX',
    'HEXTORAW',
    'HOUR',
    'HTML_ENTITY_DECODE',
    'HTML_ENTITY_ENCODE',
    'HTTP_DELETE_BLOB',
    'HTTP_DELETE',
    'HTTP_GET_BLOB',
    'HTTP_GET',
    'HTTP_PATCH_BLOB',
    'HTTP_PATCH',
    'HTTP_POST_BLOB',
    'HTTP_POST',
    'HTTP_PUT_BLOB',
    'HTTP_PUT',
    'IDENTITY_VAL_LOCAL',
    'IFNULL',
    'INSERT',
    'INSTR',
    'INT',
    'INTEGER',
    'INTERPRET',
    'ISFALSE',
    'ISNOTFALSE',
    'ISNOTTRUE',
    'ISTRUE',
    'JSON_ARRAY',
    'JSON_OBJECT',
    'JSON_QUERY',
    'JSON_TO_BSON',
    'JSON_UPDATE',
    'JSON_VALUE',
    'JULIAN_DAY',
    'LAND',
    'LAST_DAY',
    'LCASE',
    'LEAST',
    'LEFT',
    'LENGTH',
    'LN',
    'LNOT',
    'LOCATE_IN_STRING',
    'LOCATE',
    'LOG10',
    'LOR',
    'LOWER',
    'LPAD',
    'LTRIM',
    'MAX_CARDINALITY',
    'MAX',
    'MICROSECOND',
    'MIDNIGHT_SECONDS',
    'MIN',
    'MINUTE',
    'MOD',
    'MONTH',
    'MONTHNAME',
    'MONTHS_BETWEEN',
    'MQREAD',
    'MQREADCLOB',
    'MQRECEIVE',
    'MQRECEIVECLOB',
    'MQSEND',
    'MULTIPLY_ALT',
    'NEXT_DAY',
    'NORMALIZE_DECFLOAT',
    'NOW',
    'NULLIF',
    'NVL',
    'OCTET_LENGTH',
    'OVERLAY',
    'PI',
    'POSITION',
    'POSSTR',
    'POW',
    'POWER',
    'QUANTIZE',
    'QUARTER',
    'RADIANS',
    'RAISE_ERROR',
    'RANDOM or RAND',
    'REAL',
    'REGEXP_COUNT',
    'REGEXP_INSTR',
    'REGEXP_REPLACE',
    'REGEXP_SUBSTR',
    'REPEAT',
    'REPLACE',
    'RID',
    'RIGHT',
    'ROUND_TIMESTAMP',
    'ROUND',
    'ROWID',
    'RPAD',
    'RRN',
    'RTRIM',
    'SCORE',
    'SECOND',
    'SIGN',
    'SIN',
    'SINH',
    'SMALLINT',
    'SOUNDEX',
    'SPACE',
    'SQRT',
    'STRIP',
    'STRLEFT',
    'STRPOS',
    'STRRIGHT',
    'SUBSTR',
    'SUBSTRING',
    'TABLE_NAME',
    'TABLE_SCHEMA',
    'TAN',
    'TANH',
    'TIME',
    'TIMESTAMP_FORMAT',
    'TIMESTAMP_ISO',
    'TIMESTAMP',
    'TIMESTAMPDIFF_BIG',
    'TIMESTAMPDIFF',
    'TO_CHAR',
    'TO_CLOB',
    'TO_DATE',
    'TO_NUMBER',
    'TO_TIMESTAMP',
    'TOTALORDER',
    'TRANSLATE',
    'TRIM_ARRAY',
    'TRIM',
    'TRUNC_TIMESTAMP',
    'TRUNC',
    'TRUNCATE',
    'UCASE',
    'UPPER',
    'URL_DECODE',
    'URL_ENCODE',
    'VALUE',
    'VARBINARY_FORMAT',
    'VARBINARY',
    'VARCHAR_BIT_FORMAT',
    'VARCHAR_FORMAT_BINARY',
    'VARCHAR_FORMAT',
    'VARCHAR',
    'VARGRAPHIC',
    'VERIFY_GROUP_FOR_USER',
    'WEEK_ISO',
    'WEEK',
    'WRAP',
    'XMLATTRIBUTES',
    'XMLCOMMENT',
    'XMLCONCAT',
    'XMLDOCUMENT',
    'XMLELEMENT',
    'XMLFOREST',
    'XMLNAMESPACES',
    'XMLPARSE',
    'XMLPI',
    'XMLROW',
    'XMLSERIALIZE',
    'XMLTEXT',
    'XMLVALIDATE',
    'XOR',
    'XSLTRANSFORM',
    'YEAR',
    'ZONED',
  ],
  // https://www.ibm.com/docs/en/i/7.5?topic=functions-table
  table: [
    'BASE_TABLE',
    'HTTP_DELETE_BLOB_VERBOSE',
    'HTTP_DELETE_VERBOSE',
    'HTTP_GET_BLOB_VERBOSE',
    'HTTP_GET_VERBOSE',
    'HTTP_PATCH_BLOB_VERBOSE',
    'HTTP_PATCH_VERBOSE',
    'HTTP_POST_BLOB_VERBOSE',
    'HTTP_POST_VERBOSE',
    'HTTP_PUT_BLOB_VERBOSE',
    'HTTP_PUT_VERBOSE',
    'JSON_TABLE',
    'MQREADALL',
    'MQREADALLCLOB',
    'MQRECEIVEALL',
    'MQRECEIVEALLCLOB',
    'XMLTABLE',
  ],
  // https://www.ibm.com/docs/en/db2-for-zos/11?topic=functions-row
  row: ['UNPACK'],
  // https://www.ibm.com/docs/en/i/7.5?topic=expressions-olap-specifications
  olap: [
    'CUME_DIST',
    'DENSE_RANK',
    'FIRST_VALUE',
    'LAG',
    'LAST_VALUE',
    'LEAD',
    'NTH_VALUE',
    'NTILE',
    'PERCENT_RANK',
    'RANK',
    'RATIO_TO_REPORT',
    'ROW_NUMBER',
  ],
  // Type casting
  cast: ['CAST'],
});
