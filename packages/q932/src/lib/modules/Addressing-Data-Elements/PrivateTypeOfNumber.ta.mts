/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PrivateTypeOfNumber {
    unknown = 0,
    level2RegionalNumber = 1,
    level1RegionalNumber = 2,
    pTNSpecificNumber = 3,
    localNumber = 4,
    abbreviatedNumber = 6,
}

/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
type PrivateTypeOfNumber = _enum_for_PrivateTypeOfNumber;

/**
 * @summary PrivateTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0), level2RegionalNumber(1), level1RegionalNumber(2),
 *   pTNSpecificNumber(3), localNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
const PrivateTypeOfNumber = _enum_for_PrivateTypeOfNumber;

/**
 * @summary PrivateTypeOfNumber_unknown
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_unknown: PrivateTypeOfNumber = PrivateTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PrivateTypeOfNumber = PrivateTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level2RegionalNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level2RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level2RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2RegionalNumber
 * @constant
 * @type {number}
 */
export
const level2RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level2RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_level1RegionalNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_level1RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level1RegionalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1RegionalNumber
 * @constant
 * @type {number}
 */
export
const level1RegionalNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.level1RegionalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_pTNSpecificNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_pTNSpecificNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pTNSpecificNumber
 * @constant
 * @type {number}
 */
export
const pTNSpecificNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.pTNSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_localNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_localNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.localNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localNumber
 * @constant
 * @type {number}
 */
export
const localNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.localNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PrivateTypeOfNumber_abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const PrivateTypeOfNumber_abbreviatedNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber: PrivateTypeOfNumber = PrivateTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PrivateTypeOfNumber: $.ASN1Decoder<PrivateTypeOfNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateTypeOfNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateTypeOfNumber (el: _Element): PrivateTypeOfNumber {
    if (!_cached_decoder_for_PrivateTypeOfNumber) { _cached_decoder_for_PrivateTypeOfNumber = $._decodeEnumerated; }
    return _cached_decoder_for_PrivateTypeOfNumber(el);
}

let _cached_encoder_for_PrivateTypeOfNumber: $.ASN1Encoder<PrivateTypeOfNumber> | null = null;

/**
 * @summary Encodes a(n) PrivateTypeOfNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateTypeOfNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateTypeOfNumber (value: PrivateTypeOfNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateTypeOfNumber) { _cached_encoder_for_PrivateTypeOfNumber = $._encodeEnumerated; }
    return _cached_encoder_for_PrivateTypeOfNumber(value, elGetter);
}


/* eslint-enable */
