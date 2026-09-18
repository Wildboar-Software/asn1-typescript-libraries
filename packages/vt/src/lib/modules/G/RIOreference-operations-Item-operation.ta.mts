/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RIOreference_operations_Item_operation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOreference-operations-Item-operation ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RIOreference_operations_Item_operation = INTEGER;

/**
 * @summary RIOreference_operations_Item_operation_executeRecord
 * @constant
 * @type {number}
 */
export
const RIOreference_operations_Item_operation_executeRecord: RIOreference_operations_Item_operation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_executeRecord
 * @constant
 * @type {number}
 */
export
const executeRecord: RIOreference_operations_Item_operation = RIOreference_operations_Item_operation_executeRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_callRecord
 * @constant
 * @type {number}
 */
export
const RIOreference_operations_Item_operation_callRecord: RIOreference_operations_Item_operation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOreference_operations_Item_operation_callRecord
 * @constant
 * @type {number}
 */
export
const callRecord: RIOreference_operations_Item_operation = RIOreference_operations_Item_operation_callRecord; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RIOreference_operations_Item_operation = $._decodeInteger;
export const _encode_RIOreference_operations_Item_operation = $._encodeInteger;


/* eslint-enable */
