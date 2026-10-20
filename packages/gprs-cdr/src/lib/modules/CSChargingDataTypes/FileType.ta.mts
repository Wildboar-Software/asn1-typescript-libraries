/* eslint-disable */
import {
    INTEGER
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
const FileType_callRecords: FileType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_callRecords
 * @constant
 * @type {number}
 */
export
const callRecords: FileType = FileType_callRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_traceRecords
 * @constant
 * @type {number}
 */
export
const FileType_traceRecords: FileType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_traceRecords
 * @constant
 * @type {number}
 */
export
const traceRecords: FileType = FileType_traceRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const FileType_observedIMEITicket: FileType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const observedIMEITicket: FileType = FileType_observedIMEITicket; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_FileType: $.ASN1Decoder<FileType> = $._decodeInteger;

export
const _encode_FileType: $.ASN1Encoder<FileType> = $._encodeInteger;

/* eslint-enable */
