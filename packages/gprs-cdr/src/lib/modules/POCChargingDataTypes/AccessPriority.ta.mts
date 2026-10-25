/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPriority
 * @description
 *
 * User priority level of one participant in the PoC session.
 * TS 32.272 does not define how pre-emptive, high, normal, and
 * low are applied.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPriority  ::=  ENUMERATED {
 *    pre-emptive    ( 0 ),
 *    high           ( 1 ),
 *    normal         ( 2 ),
 *    low            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AccessPriority {
    pre_emptive = 0,
    high = 1,
    normal = 2,
    low = 3,
}

/**
 * @summary AccessPriority
 * @description
 *
 * User priority level of one participant in the PoC session.
 * TS 32.272 does not define how pre-emptive, high, normal, and
 * low are applied.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPriority  ::=  ENUMERATED {
 *    pre-emptive    ( 0 ),
 *    high           ( 1 ),
 *    normal         ( 2 ),
 *    low            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type AccessPriority = _enum_for_AccessPriority;

/**
 * @summary AccessPriority
 * @description
 *
 * User priority level of one participant in the PoC session.
 * TS 32.272 does not define how pre-emptive, high, normal, and
 * low are applied.
 *
 * 3GPP TS 32.272 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPriority  ::=  ENUMERATED {
 *    pre-emptive    ( 0 ),
 *    high           ( 1 ),
 *    normal         ( 2 ),
 *    low            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const AccessPriority: typeof _enum_for_AccessPriority = _enum_for_AccessPriority;

/**
 * @summary AccessPriority_pre_emptive
 * @constant
 * @type {number}
 */
export
const AccessPriority_pre_emptive: _enum_for_AccessPriority.pre_emptive = AccessPriority.pre_emptive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_emptive
 * @constant
 * @type {number}
 */
export
const pre_emptive: _enum_for_AccessPriority.pre_emptive = AccessPriority.pre_emptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_high
 * @constant
 * @type {number}
 */
export
const AccessPriority_high: _enum_for_AccessPriority.high = AccessPriority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: _enum_for_AccessPriority.high = AccessPriority.high; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_normal
 * @constant
 * @type {number}
 */
export
const AccessPriority_normal: _enum_for_AccessPriority.normal = AccessPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: _enum_for_AccessPriority.normal = AccessPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_low
 * @constant
 * @type {number}
 */
export
const AccessPriority_low: _enum_for_AccessPriority.low = AccessPriority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: _enum_for_AccessPriority.low = AccessPriority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AccessPriority: $.ASN1Decoder<AccessPriority> = $._decodeEnumerated;

export
const _encode_AccessPriority: $.ASN1Encoder<AccessPriority> = $._encodeEnumerated;

/* eslint-enable */
