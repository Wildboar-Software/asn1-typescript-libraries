/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Multiplier
 * @description
 *
 * Scale factor applied to `CurrencyAmount`. The allowed factors are 0,001,
 * 0,01, 0,1, 1, 10, 100, and 1000 (ECMA-211 §A.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Scale factor applied to `CurrencyAmount`. The allowed factors are 0,001,
 * 0,01, 0,1, 1, 10, 100, and 1000 (ECMA-211 §A.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * Scale factor applied to `CurrencyAmount`. The allowed factors are 0,001,
 * 0,01, 0,1, 1, 10, 100, and 1000 (ECMA-211 §A.1.3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
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
 * @description Scale factor 0,001 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_oneThousandth = Multiplier.oneThousandth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneThousandth
 * @description Alias of {@link Multiplier_oneThousandth}.
 * @constant
 * @type {number}
 */
export
const oneThousandth = Multiplier.oneThousandth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_oneHundredth
 * @description Scale factor 0,01 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_oneHundredth = Multiplier.oneHundredth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHundredth
 * @description Alias of {@link Multiplier_oneHundredth}.
 * @constant
 * @type {number}
 */
export
const oneHundredth = Multiplier.oneHundredth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_oneTenth
 * @description Scale factor 0,1 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_oneTenth = Multiplier.oneTenth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTenth
 * @description Alias of {@link Multiplier_oneTenth}.
 * @constant
 * @type {number}
 */
export
const oneTenth = Multiplier.oneTenth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_one
 * @description Scale factor 1 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_one = Multiplier.one; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary one
 * @description Alias of {@link Multiplier_one}.
 * @constant
 * @type {number}
 */
export
const one = Multiplier.one; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_ten
 * @description Scale factor 10 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_ten = Multiplier.ten; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ten
 * @description Alias of {@link Multiplier_ten}.
 * @constant
 * @type {number}
 */
export
const ten = Multiplier.ten; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_hundred
 * @description Scale factor 100 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_hundred = Multiplier.hundred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hundred
 * @description Alias of {@link Multiplier_hundred}.
 * @constant
 * @type {number}
 */
export
const hundred = Multiplier.hundred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Multiplier_thousand
 * @description Scale factor 1000 (ECMA-211 §A.1.3).
 * @constant
 * @type {number}
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 */
export
const Multiplier_thousand = Multiplier.thousand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thousand
 * @description Alias of {@link Multiplier_thousand}.
 * @constant
 * @type {number}
 */
export
const thousand = Multiplier.thousand; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_Multiplier: $.ASN1Decoder<Multiplier> = $._decodeEnumerated;

export
const _encode_Multiplier: $.ASN1Encoder<Multiplier> = $._encodeEnumerated;

/* eslint-enable */
