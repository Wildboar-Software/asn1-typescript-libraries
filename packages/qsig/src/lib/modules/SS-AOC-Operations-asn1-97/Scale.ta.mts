/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Scale
 * @description
 *
 * Unit of `LengthOfTimeUnit`: 0,01 s, 0,1 s, 1 s, 10 s, 1 min, 1 hour, or 24
 * hours (ECMA-211 §A.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Unit of `LengthOfTimeUnit`: 0,01 s, 0,1 s, 1 s, 10 s, 1 min, 1 hour, or 24
 * hours (ECMA-211 §A.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Unit of `LengthOfTimeUnit`: 0,01 s, 0,1 s, 1 s, 10 s, 1 min, 1 hour, or 24
 * hours (ECMA-211 §A.1.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
const Scale: typeof _enum_for_Scale = _enum_for_Scale;

/**
 * @summary Scale_oneHundredthSecond
 * @description 0,01 s (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_oneHundredthSecond: _enum_for_Scale.oneHundredthSecond = Scale.oneHundredthSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHundredthSecond
 * @description Alias of {@link Scale_oneHundredthSecond}.
 * @constant
 * @type {number}
 */
export
const oneHundredthSecond: _enum_for_Scale.oneHundredthSecond = Scale.oneHundredthSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneTenthSecond
 * @description 0,1 s (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_oneTenthSecond: _enum_for_Scale.oneTenthSecond = Scale.oneTenthSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTenthSecond
 * @description Alias of {@link Scale_oneTenthSecond}.
 * @constant
 * @type {number}
 */
export
const oneTenthSecond: _enum_for_Scale.oneTenthSecond = Scale.oneTenthSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneSecond
 * @description 1 s (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_oneSecond: _enum_for_Scale.oneSecond = Scale.oneSecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneSecond
 * @description Alias of {@link Scale_oneSecond}.
 * @constant
 * @type {number}
 */
export
const oneSecond: _enum_for_Scale.oneSecond = Scale.oneSecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_tenSeconds
 * @description 10 s (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_tenSeconds: _enum_for_Scale.tenSeconds = Scale.tenSeconds; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tenSeconds
 * @description Alias of {@link Scale_tenSeconds}.
 * @constant
 * @type {number}
 */
export
const tenSeconds: _enum_for_Scale.tenSeconds = Scale.tenSeconds; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneMinute
 * @description 1 min (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_oneMinute: _enum_for_Scale.oneMinute = Scale.oneMinute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneMinute
 * @description Alias of {@link Scale_oneMinute}.
 * @constant
 * @type {number}
 */
export
const oneMinute: _enum_for_Scale.oneMinute = Scale.oneMinute; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_oneHour
 * @description 1 hour (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_oneHour: _enum_for_Scale.oneHour = Scale.oneHour; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHour
 * @description Alias of {@link Scale_oneHour}.
 * @constant
 * @type {number}
 */
export
const oneHour: _enum_for_Scale.oneHour = Scale.oneHour; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Scale_twentyFourHours
 * @description 24 hours (ECMA-211 §A.1.3.1).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Scale_twentyFourHours: _enum_for_Scale.twentyFourHours = Scale.twentyFourHours; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary twentyFourHours
 * @description Alias of {@link Scale_twentyFourHours}.
 * @constant
 * @type {number}
 */
export
const twentyFourHours: _enum_for_Scale.twentyFourHours = Scale.twentyFourHours; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Scale: $.ASN1Decoder<Scale> = $._decodeEnumerated;

export
const _encode_Scale: $.ASN1Encoder<Scale> = $._encodeEnumerated;

/* eslint-enable */
