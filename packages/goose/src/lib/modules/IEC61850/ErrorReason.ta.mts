/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
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
const ErrorReason_other: 0 = 0 satisfies ErrorReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_other
 * @constant
 * @type {number}
 */
export
const other: 0 = ErrorReason_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const ErrorReason_notFound: 1 = 1 satisfies ErrorReason; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ErrorReason_notFound
 * @constant
 * @type {number}
 */
export
const notFound: 1 = ErrorReason_notFound; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ErrorReason: $.ASN1Decoder<ErrorReason> = $._decodeInteger;
export const _encode_ErrorReason: $.ASN1Encoder<ErrorReason> = $._encodeInteger;


/* eslint-enable */
