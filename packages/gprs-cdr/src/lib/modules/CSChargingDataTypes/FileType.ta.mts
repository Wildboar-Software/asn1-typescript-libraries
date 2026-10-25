/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FileType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileType    ::=  INTEGER {
 *    callRecords           ( 1 ),
 *    traceRecords          ( 9 ),
 *    observedIMEITicket    ( 14 )}
 * ```
 */
export
type FileType = INTEGER;

/**
 * @summary FileType_callRecords
 * @constant
 * @type {number}
 */
export
const FileType_callRecords = 1 satisfies FileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_callRecords
 * @constant
 * @type {number}
 */
export
const callRecords = FileType_callRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_traceRecords
 * @constant
 * @type {number}
 */
export
const FileType_traceRecords = 9 satisfies FileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_traceRecords
 * @constant
 * @type {number}
 */
export
const traceRecords = FileType_traceRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const FileType_observedIMEITicket = 14 satisfies FileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const observedIMEITicket = FileType_observedIMEITicket; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_FileType: $.ASN1Decoder<FileType> = $._decodeInteger;

export
const _encode_FileType: $.ASN1Encoder<FileType> = $._encodeInteger;

/* eslint-enable */
