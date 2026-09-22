/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PublicTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PublicTypeOfNumber {
    unknown = 0,
    internationalNumber = 1,
    nationalNumber = 2,
    networkSpecificNumber = 3,
    subscriberNumber = 4,
    abbreviatedNumber = 6,
}

/**
 * @summary PublicTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
type PublicTypeOfNumber = _enum_for_PublicTypeOfNumber;

/**
 * @summary PublicTypeOfNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTypeOfNumber  ::=  ENUMERATED {
 *   unknown(0),
 *   --  if used number digits carry prefix indicating type
 *   --  of number according to national
 *   --  recommendations
 *   internationalNumber(1), nationalNumber(2),
 *   networkSpecificNumber(3),
 *   --  not used, value reserved
 *   subscriberNumber(4), abbreviatedNumber(6)}
 * ```
 * 
 * @enum {number}
 */
export
const PublicTypeOfNumber = _enum_for_PublicTypeOfNumber;

/**
 * @summary PublicTypeOfNumber_unknown
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_unknown: PublicTypeOfNumber = PublicTypeOfNumber.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @constant
 * @type {number}
 */
export
const unknown: PublicTypeOfNumber = PublicTypeOfNumber.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_internationalNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_internationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.internationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internationalNumber
 * @constant
 * @type {number}
 */
export
const internationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.internationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_nationalNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_nationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.nationalNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nationalNumber
 * @constant
 * @type {number}
 */
export
const nationalNumber: PublicTypeOfNumber = PublicTypeOfNumber.nationalNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_networkSpecificNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_networkSpecificNumber: PublicTypeOfNumber = PublicTypeOfNumber.networkSpecificNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkSpecificNumber
 * @constant
 * @type {number}
 */
export
const networkSpecificNumber: PublicTypeOfNumber = PublicTypeOfNumber.networkSpecificNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_subscriberNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_subscriberNumber: PublicTypeOfNumber = PublicTypeOfNumber.subscriberNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriberNumber
 * @constant
 * @type {number}
 */
export
const subscriberNumber: PublicTypeOfNumber = PublicTypeOfNumber.subscriberNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PublicTypeOfNumber_abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const PublicTypeOfNumber_abbreviatedNumber: PublicTypeOfNumber = PublicTypeOfNumber.abbreviatedNumber; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abbreviatedNumber
 * @constant
 * @type {number}
 */
export
const abbreviatedNumber: PublicTypeOfNumber = PublicTypeOfNumber.abbreviatedNumber; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_PublicTypeOfNumber: $.ASN1Decoder<PublicTypeOfNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicTypeOfNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicTypeOfNumber (el: _Element): PublicTypeOfNumber {
    if (!_cached_decoder_for_PublicTypeOfNumber) { _cached_decoder_for_PublicTypeOfNumber = $._decodeEnumerated; }
    return _cached_decoder_for_PublicTypeOfNumber(el);
}

let _cached_encoder_for_PublicTypeOfNumber: $.ASN1Encoder<PublicTypeOfNumber> | null = null;

/**
 * @summary Encodes a(n) PublicTypeOfNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicTypeOfNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PublicTypeOfNumber (value: PublicTypeOfNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicTypeOfNumber) { _cached_encoder_for_PublicTypeOfNumber = $._encodeEnumerated; }
    return _cached_encoder_for_PublicTypeOfNumber(value, elGetter);
}


/* eslint-enable */
