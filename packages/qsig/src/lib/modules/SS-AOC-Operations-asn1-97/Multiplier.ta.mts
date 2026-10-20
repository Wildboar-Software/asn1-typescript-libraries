/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Multiplier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Multiplier  ::=  ENUMERATED {
 *     oneThousandth(0),
 *     oneHundredth(1),
 *     oneTenth(2),
 *     one(3),
 *     ten(4),
 *     hundred(5),
 *     thousand(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Multiplier {
    oneThousandth = 0,
    oneHundredth = 1,
    oneTenth = 2,
    one = 3,
    ten = 4,
    hundred = 5,
    thousand = 6,
}

/**
 * @summary Multiplier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Multiplier  ::=  ENUMERATED {
 *     oneThousandth(0),
 *     oneHundredth(1),
 *     oneTenth(2),
 *     one(3),
 *     ten(4),
 *     hundred(5),
 *     thousand(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Multiplier = _enum_for_Multiplier;

/**
 * @summary Multiplier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Multiplier  ::=  ENUMERATED {
 *     oneThousandth(0),
 *     oneHundredth(1),
 *     oneTenth(2),
 *     one(3),
 *     ten(4),
 *     hundred(5),
 *     thousand(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Multiplier = _enum_for_Multiplier;

/**
 * @summary Multiplier_oneThousandth
 * @constant
 * @type {number}
 */
export
const Multiplier_oneThousandth: Multiplier = Multiplier.oneThousandth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneThousandth
 * @constant
 * @type {number}
 */
export
const oneThousandth: Multiplier = Multiplier.oneThousandth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_oneHundredth
 * @constant
 * @type {number}
 */
export
const Multiplier_oneHundredth: Multiplier = Multiplier.oneHundredth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHundredth
 * @constant
 * @type {number}
 */
export
const oneHundredth: Multiplier = Multiplier.oneHundredth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_oneTenth
 * @constant
 * @type {number}
 */
export
const Multiplier_oneTenth: Multiplier = Multiplier.oneTenth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTenth
 * @constant
 * @type {number}
 */
export
const oneTenth: Multiplier = Multiplier.oneTenth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_one
 * @constant
 * @type {number}
 */
export
const Multiplier_one: Multiplier = Multiplier.one; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary one
 * @constant
 * @type {number}
 */
export
const one: Multiplier = Multiplier.one; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_ten
 * @constant
 * @type {number}
 */
export
const Multiplier_ten: Multiplier = Multiplier.ten; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ten
 * @constant
 * @type {number}
 */
export
const ten: Multiplier = Multiplier.ten; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_hundred
 * @constant
 * @type {number}
 */
export
const Multiplier_hundred: Multiplier = Multiplier.hundred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hundred
 * @constant
 * @type {number}
 */
export
const hundred: Multiplier = Multiplier.hundred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_thousand
 * @constant
 * @type {number}
 */
export
const Multiplier_thousand: Multiplier = Multiplier.thousand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thousand
 * @constant
 * @type {number}
 */
export
const thousand: Multiplier = Multiplier.thousand; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Multiplier: $.ASN1Decoder<Multiplier> = $._decodeEnumerated;

export
const _encode_Multiplier: $.ASN1Encoder<Multiplier> = $._encodeEnumerated;

/* eslint-enable */
