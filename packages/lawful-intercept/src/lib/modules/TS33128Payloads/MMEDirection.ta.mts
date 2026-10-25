/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEDirection
 * @description
 * 
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMEDirection {
    networkInitiated = 1,
    uEInitiated = 2,
}

/**
 * @summary MMEDirection
 * @description
 * 
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection
 * @description
 * 
 * Indicates whether the deregistration was initiated by the network or by the
 * UE.
 *
 * 3GPP TS 33.128, clause 6.3.2.2.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEDirection  ::=  ENUMERATED
 * {
 *     networkInitiated(1),
 *     uEInitiated(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMEDirection: typeof _enum_for_MMEDirection = _enum_for_MMEDirection;

/**
 * @summary MMEDirection_networkInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_networkInitiated: _enum_for_MMEDirection.networkInitiated = MMEDirection.networkInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkInitiated
 * @constant
 * @type {number}
 */
export
const networkInitiated: _enum_for_MMEDirection.networkInitiated = MMEDirection.networkInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMEDirection_uEInitiated
 * @constant
 * @type {number}
 */
export
const MMEDirection_uEInitiated: _enum_for_MMEDirection.uEInitiated = MMEDirection.uEInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEInitiated
 * @constant
 * @type {number}
 */
export
const uEInitiated: _enum_for_MMEDirection.uEInitiated = MMEDirection.uEInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMEDirection: $.ASN1Decoder<MMEDirection> = $._decodeEnumerated;
export const _encode_MMEDirection: $.ASN1Encoder<MMEDirection> = $._encodeEnumerated;


/* eslint-enable */
