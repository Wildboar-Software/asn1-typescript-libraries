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
const AccessPriority = _enum_for_AccessPriority;

/**
 * @summary AccessPriority_pre_emptive
 * @constant
 * @type {number}
 */
export
const AccessPriority_pre_emptive = AccessPriority.pre_emptive satisfies AccessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_emptive
 * @constant
 * @type {number}
 */
export
const pre_emptive = AccessPriority.pre_emptive satisfies AccessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_high
 * @constant
 * @type {number}
 */
export
const AccessPriority_high = AccessPriority.high satisfies AccessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high = AccessPriority.high satisfies AccessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_normal
 * @constant
 * @type {number}
 */
export
const AccessPriority_normal = AccessPriority.normal satisfies AccessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal = AccessPriority.normal satisfies AccessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_low
 * @constant
 * @type {number}
 */
export
const AccessPriority_low = AccessPriority.low satisfies AccessPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low = AccessPriority.low satisfies AccessPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AccessPriority: $.ASN1Decoder<AccessPriority> = $._decodeEnumerated;

export
const _encode_AccessPriority: $.ASN1Encoder<AccessPriority> = $._encodeEnumerated;

/* eslint-enable */
