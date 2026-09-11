/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier
 * @description
 *
 * Currency unit multiplier. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCurrencyUnits_currencyMultiplier ::= ENUMERATED {
 *     oneThousandth (0),
 *     oneHundredth (1),
 *     oneTenth (2),
 *     one (3),
 *     ten (4),
 *     hundred (5),
 *     thousand (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NumberOfCurrencyUnits_currencyMultiplier {
    oneThousandth = 0,
    oneHundredth = 1,
    oneTenth = 2,
    one = 3,
    ten = 4,
    hundred = 5,
    thousand = 6,
}

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier
 * @description
 *
 * Currency unit multiplier. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCurrencyUnits_currencyMultiplier ::= ENUMERATED {
 *     oneThousandth (0),
 *     oneHundredth (1),
 *     oneTenth (2),
 *     one (3),
 *     ten (4),
 *     hundred (5),
 *     thousand (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NumberOfCurrencyUnits_currencyMultiplier = _enum_for_NumberOfCurrencyUnits_currencyMultiplier;

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier
 * @description
 *
 * Currency unit multiplier. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCurrencyUnits_currencyMultiplier ::= ENUMERATED {
 *     oneThousandth (0),
 *     oneHundredth (1),
 *     oneTenth (2),
 *     one (3),
 *     ten (4),
 *     hundred (5),
 *     thousand (6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier = _enum_for_NumberOfCurrencyUnits_currencyMultiplier;

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_oneThousandth
 * @description
 *
 * Multiplier 0.001. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_oneThousandth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneThousandth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneThousandth
 * @constant
 * @type {number}
 */
export
const oneThousandth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneThousandth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_oneHundredth
 * @description
 *
 * Multiplier 0.01. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_oneHundredth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneHundredth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneHundredth
 * @constant
 * @type {number}
 */
export
const oneHundredth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneHundredth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_oneTenth
 * @description
 *
 * Multiplier 0.1. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_oneTenth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneTenth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTenth
 * @constant
 * @type {number}
 */
export
const oneTenth: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.oneTenth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_one
 * @description
 *
 * Multiplier 1. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_one: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.one; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary one
 * @constant
 * @type {number}
 */
export
const one: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.one; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_ten
 * @description
 *
 * Multiplier 10. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_ten: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.ten; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ten
 * @constant
 * @type {number}
 */
export
const ten: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.ten; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_hundred
 * @description
 *
 * Multiplier 100. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_hundred: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.hundred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hundred
 * @constant
 * @type {number}
 */
export
const hundred: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.hundred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NumberOfCurrencyUnits_currencyMultiplier_thousand
 * @description
 *
 * Multiplier 1000. ECMA-269 §12.2.7.
 *
 * @constant
 * @type {number}
 */
export
const NumberOfCurrencyUnits_currencyMultiplier_thousand: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.thousand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary thousand
 * @constant
 * @type {number}
 */
export
const thousand: NumberOfCurrencyUnits_currencyMultiplier = NumberOfCurrencyUnits_currencyMultiplier.thousand; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NumberOfCurrencyUnits_currencyMultiplier: $.ASN1Decoder<NumberOfCurrencyUnits_currencyMultiplier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCurrencyUnits_currencyMultiplier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfCurrencyUnits_currencyMultiplier (el: _Element): NumberOfCurrencyUnits_currencyMultiplier {
    if (!_cached_decoder_for_NumberOfCurrencyUnits_currencyMultiplier) { _cached_decoder_for_NumberOfCurrencyUnits_currencyMultiplier = $._decodeEnumerated; }
    return _cached_decoder_for_NumberOfCurrencyUnits_currencyMultiplier(el);
}

let _cached_encoder_for_NumberOfCurrencyUnits_currencyMultiplier: $.ASN1Encoder<NumberOfCurrencyUnits_currencyMultiplier> | null = null;

/**
 * @summary Encodes a(n) NumberOfCurrencyUnits_currencyMultiplier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCurrencyUnits_currencyMultiplier, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfCurrencyUnits_currencyMultiplier (value: NumberOfCurrencyUnits_currencyMultiplier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfCurrencyUnits_currencyMultiplier) { _cached_encoder_for_NumberOfCurrencyUnits_currencyMultiplier = $._encodeEnumerated; }
    return _cached_encoder_for_NumberOfCurrencyUnits_currencyMultiplier(value, elGetter);
}


/* eslint-enable */
