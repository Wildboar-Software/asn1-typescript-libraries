/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ErrorReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorReason  ::=  INTEGER {
 *     other (0),
 *     notFound (1) --,
 * --    ...
 * }
 * ```
 */
export
type ErrorReason = INTEGER;

/**
 * @summary ErrorReason_other
 * @constant
 * @type {number}
 */
export
const ErrorReason_other: ErrorReason = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_other
 * @constant
 * @type {number}
 */
export
const other: ErrorReason = ErrorReason_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const ErrorReason_notFound: ErrorReason = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const notFound: ErrorReason = ErrorReason_notFound; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorReason: $.ASN1Decoder<ErrorReason> = $._decodeInteger;
export const _encode_ErrorReason: $.ASN1Encoder<ErrorReason> = $._encodeInteger;


/* eslint-enable */
