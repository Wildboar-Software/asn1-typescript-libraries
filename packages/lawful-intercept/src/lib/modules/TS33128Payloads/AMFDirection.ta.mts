/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AMFDirection {
    networkInitiated = 1,
    uEInitiated = 2,
}

/**
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AMFDirection = _enum_for_AMFDirection;

/**
 * @summary AMFDirection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AMFDirection = _enum_for_AMFDirection;

/**
 * @summary AMFDirection_networkInitiated
 * @constant
 * @type {number}
 */
export
const AMFDirection_networkInitiated: AMFDirection = AMFDirection.networkInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInitiated
 * @constant
 * @type {number}
 */
export
const networkInitiated: AMFDirection = AMFDirection.networkInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AMFDirection_uEInitiated
 * @constant
 * @type {number}
 */
export
const AMFDirection_uEInitiated: AMFDirection = AMFDirection.uEInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitiated
 * @constant
 * @type {number}
 */
export
const uEInitiated: AMFDirection = AMFDirection.uEInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AMFDirection: $.ASN1Decoder<AMFDirection> = $._decodeEnumerated;
export const _encode_AMFDirection: $.ASN1Encoder<AMFDirection> = $._encodeEnumerated;


/* eslint-enable */
