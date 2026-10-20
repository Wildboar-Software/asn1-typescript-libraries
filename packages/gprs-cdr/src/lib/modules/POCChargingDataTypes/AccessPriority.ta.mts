/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPriority
 * @description
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
const AccessPriority_pre_emptive: AccessPriority = AccessPriority.pre_emptive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_emptive
 * @constant
 * @type {number}
 */
export
const pre_emptive: AccessPriority = AccessPriority.pre_emptive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_high
 * @constant
 * @type {number}
 */
export
const AccessPriority_high: AccessPriority = AccessPriority.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @constant
 * @type {number}
 */
export
const high: AccessPriority = AccessPriority.high; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_normal
 * @constant
 * @type {number}
 */
export
const AccessPriority_normal: AccessPriority = AccessPriority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
export
const normal: AccessPriority = AccessPriority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AccessPriority_low
 * @constant
 * @type {number}
 */
export
const AccessPriority_low: AccessPriority = AccessPriority.low; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary low
 * @constant
 * @type {number}
 */
export
const low: AccessPriority = AccessPriority.low; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_AccessPriority: $.ASN1Decoder<AccessPriority> = $._decodeEnumerated;

export
const _encode_AccessPriority: $.ASN1Encoder<AccessPriority> = $._encodeEnumerated;

/* eslint-enable */
