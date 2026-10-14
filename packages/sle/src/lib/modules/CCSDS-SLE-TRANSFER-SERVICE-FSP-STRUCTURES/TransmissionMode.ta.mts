/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransmissionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransmissionMode         ::=    INTEGER
 * {  sequenceControlled         (0)   -- AD mode
 * ,  expedited                  (1)   -- BD mode
 * ,  sequenceControlledUnblock  (2)   -- AD mode with unblocking
 * }
 * ```
 */
export
type TransmissionMode = INTEGER;

/**
 * @summary TransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlled: TransmissionMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const sequenceControlled: TransmissionMode = TransmissionMode_sequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const TransmissionMode_expedited: TransmissionMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const expedited: TransmissionMode = TransmissionMode_expedited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlledUnblock: TransmissionMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @constant
 * @type {number}
 */
export
const sequenceControlledUnblock: TransmissionMode = TransmissionMode_sequenceControlledUnblock; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TransmissionMode: $.ASN1Decoder<TransmissionMode> = $._decodeInteger;
export const _encode_TransmissionMode: $.ASN1Encoder<TransmissionMode> = $._encodeInteger;


/* eslint-enable */
