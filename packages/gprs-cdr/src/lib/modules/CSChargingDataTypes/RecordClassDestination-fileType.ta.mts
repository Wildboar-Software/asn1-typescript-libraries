/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RecordClassDestination_fileType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordClassDestination-fileType ::= INTEGER {
 *    callRecords           ( 1 ),
 *    traceRecords          ( 9 ),
 *    observedIMEITicket    ( 14 )
 * }
 * ```
 */
export
type RecordClassDestination_fileType = INTEGER;

/**
 * @summary RecordClassDestination_fileType_callRecords
 * @constant
 * @type {number}
 */
export
const RecordClassDestination_fileType_callRecords: 1 = 1 satisfies RecordClassDestination_fileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordClassDestination_fileType_callRecords
 * @constant
 * @type {number}
 */
export
const callRecords: 1 = RecordClassDestination_fileType_callRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordClassDestination_fileType_traceRecords
 * @constant
 * @type {number}
 */
export
const RecordClassDestination_fileType_traceRecords: 9 = 9 satisfies RecordClassDestination_fileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordClassDestination_fileType_traceRecords
 * @constant
 * @type {number}
 */
export
const traceRecords: 9 = RecordClassDestination_fileType_traceRecords; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RecordClassDestination_fileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const RecordClassDestination_fileType_observedIMEITicket: 14 = 14 satisfies RecordClassDestination_fileType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RecordClassDestination_fileType_observedIMEITicket
 * @constant
 * @type {number}
 */
export
const observedIMEITicket: 14 = RecordClassDestination_fileType_observedIMEITicket; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RecordClassDestination_fileType: $.ASN1Decoder<RecordClassDestination_fileType> = $._decodeInteger;

export
const _encode_RecordClassDestination_fileType: $.ASN1Encoder<RecordClassDestination_fileType> = $._encodeInteger;

/* eslint-enable */
