/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AMFDirection
 * @description
 * 
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
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
