/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Scale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Scale  ::=  ENUMERATED {
 *     oneHundredthSecond(0),
 *     oneTenthSecond(1),
 *     oneSecond(2),
 *     tenSeconds(3),
 *     oneMinute(4),
 *     oneHour(5),
 *     twentyFourHours(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Scale {
    oneHundredthSecond = 0,
    oneTenthSecond = 1,
    oneSecond = 2,
    tenSeconds = 3,
    oneMinute = 4,
    oneHour = 5,
    twentyFourHours = 6,
}

/**
 * @summary Scale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Scale  ::=  ENUMERATED {
 *     oneHundredthSecond(0),
 *     oneTenthSecond(1),
 *     oneSecond(2),
 *     tenSeconds(3),
 *     oneMinute(4),
 *     oneHour(5),
 *     twentyFourHours(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Scale = _enum_for_Scale;

/**
 * @summary Scale
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Scale  ::=  ENUMERATED {
 *     oneHundredthSecond(0),
 *     oneTenthSecond(1),
 *     oneSecond(2),
 *     tenSeconds(3),
 *     oneMinute(4),
 *     oneHour(5),
 *     twentyFourHours(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Scale = _enum_for_Scale;

/**
 * @summary Scale_oneHundredthSecond
 * @constant
 * @type {number}
 */
export
const Scale_oneHundredthSecond: Scale = Scale.oneHundredthSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHundredthSecond
 * @constant
 * @type {number}
 */
export
const oneHundredthSecond: Scale = Scale.oneHundredthSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneTenthSecond
 * @constant
 * @type {number}
 */
export
const Scale_oneTenthSecond: Scale = Scale.oneTenthSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTenthSecond
 * @constant
 * @type {number}
 */
export
const oneTenthSecond: Scale = Scale.oneTenthSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneSecond
 * @constant
 * @type {number}
 */
export
const Scale_oneSecond: Scale = Scale.oneSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneSecond
 * @constant
 * @type {number}
 */
export
const oneSecond: Scale = Scale.oneSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_tenSeconds
 * @constant
 * @type {number}
 */
export
const Scale_tenSeconds: Scale = Scale.tenSeconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tenSeconds
 * @constant
 * @type {number}
 */
export
const tenSeconds: Scale = Scale.tenSeconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneMinute
 * @constant
 * @type {number}
 */
export
const Scale_oneMinute: Scale = Scale.oneMinute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneMinute
 * @constant
 * @type {number}
 */
export
const oneMinute: Scale = Scale.oneMinute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneHour
 * @constant
 * @type {number}
 */
export
const Scale_oneHour: Scale = Scale.oneHour; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHour
 * @constant
 * @type {number}
 */
export
const oneHour: Scale = Scale.oneHour; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_twentyFourHours
 * @constant
 * @type {number}
 */
export
const Scale_twentyFourHours: Scale = Scale.twentyFourHours; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twentyFourHours
 * @constant
 * @type {number}
 */
export
const twentyFourHours: Scale = Scale.twentyFourHours; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Scale: $.ASN1Decoder<Scale> = $._decodeEnumerated;

export
const _encode_Scale: $.ASN1Encoder<Scale> = $._encodeEnumerated;

/* eslint-enable */
