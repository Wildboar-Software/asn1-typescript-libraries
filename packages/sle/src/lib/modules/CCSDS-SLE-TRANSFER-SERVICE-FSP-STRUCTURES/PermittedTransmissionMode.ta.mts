/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PermittedTransmissionMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedTransmissionMode   ::=    INTEGER
 * {  sequenceControlled               (0)
 * ,  expedited                        (1)
 * ,  any                              (2)
 * }
 * ```
 */
export
type PermittedTransmissionMode = INTEGER;

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_sequenceControlled: PermittedTransmissionMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @constant
 * @type {number}
 */
export
const sequenceControlled: PermittedTransmissionMode = PermittedTransmissionMode_sequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_expedited: PermittedTransmissionMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @constant
 * @type {number}
 */
export
const expedited: PermittedTransmissionMode = PermittedTransmissionMode_expedited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_any_: PermittedTransmissionMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @constant
 * @type {number}
 */
export
const any_: PermittedTransmissionMode = PermittedTransmissionMode_any_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PermittedTransmissionMode: $.ASN1Decoder<PermittedTransmissionMode> = $._decodeInteger;
export const _encode_PermittedTransmissionMode: $.ASN1Encoder<PermittedTransmissionMode> = $._encodeInteger;


/* eslint-enable */
