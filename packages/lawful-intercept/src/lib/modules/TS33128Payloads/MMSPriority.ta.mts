/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSPriority
 * @description
 * 
 * Priority of the email assigned by the originator. Include if sent to the MMS
 * Proxy-Relay (see NOTE).
 *
 * 3GPP TS 33.128, clause 7.4.3.2A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSPriority {
    low = 1,
    normal = 2,
    high = 3,
}

/**
 * @summary MMSPriority
 * @description
 * 
 * Priority of the email assigned by the originator. Include if sent to the MMS
 * Proxy-Relay (see NOTE).
 *
 * 3GPP TS 33.128, clause 7.4.3.2A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSPriority = _enum_for_MMSPriority;

/**
 * @summary MMSPriority
 * @description
 * 
 * Priority of the email assigned by the originator. Include if sent to the MMS
 * Proxy-Relay (see NOTE).
 *
 * 3GPP TS 33.128, clause 7.4.3.2A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSPriority  ::=  ENUMERATED
 * {
 *     low(1),
 *     normal(2),
 *     high(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSPriority = _enum_for_MMSPriority;

/**
 * @summary MMSPriority_low
 * @constant
 * @type {number}
 */
export
const MMSPriority_low = MMSPriority.low satisfies MMSPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low = MMSPriority.low satisfies MMSPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPriority_normal
 * @constant
 * @type {number}
 */
export
const MMSPriority_normal = MMSPriority.normal satisfies MMSPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal = MMSPriority.normal satisfies MMSPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSPriority_high
 * @constant
 * @type {number}
 */
export
const MMSPriority_high = MMSPriority.high satisfies MMSPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high = MMSPriority.high satisfies MMSPriority; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSPriority: $.ASN1Decoder<MMSPriority> = $._decodeEnumerated;
export const _encode_MMSPriority: $.ASN1Encoder<MMSPriority> = $._encodeEnumerated;


/* eslint-enable */
