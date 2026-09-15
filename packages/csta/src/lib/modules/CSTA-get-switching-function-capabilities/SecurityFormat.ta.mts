/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SecurityFormat
 * @description
 *
 * securityInfo/privateData encodings to and from the SF (octet
 * string vs other). Table 13-9.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityFormat  ::=  BIT STRING
 * {     octetStringFromSF                 (0),
 *     otherTypeFromSF                 (1),
 *     octetStringToSF                 (2),
 *     otherTypeToSF                     (3) }
 * ```
 */
export
type SecurityFormat = BIT_STRING;

/**
 * @summary SecurityFormat_octetStringFromSF
 * @constant
 */
export
const SecurityFormat_octetStringFromSF: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary octetStringFromSF
 * @constant
 */
export
const octetStringFromSF: number = SecurityFormat_octetStringFromSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_otherTypeFromSF
 * @constant
 */
export
const SecurityFormat_otherTypeFromSF: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary otherTypeFromSF
 * @constant
 */
export
const otherTypeFromSF: number = SecurityFormat_otherTypeFromSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_octetStringToSF
 * @constant
 */
export
const SecurityFormat_octetStringToSF: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary octetStringToSF
 * @constant
 */
export
const octetStringToSF: number = SecurityFormat_octetStringToSF; /* SHORT_NAMED_BIT */

/**
 * @summary SecurityFormat_otherTypeToSF
 * @constant
 */
export
const SecurityFormat_otherTypeToSF: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary otherTypeToSF
 * @constant
 */
export
const otherTypeToSF: number = SecurityFormat_otherTypeToSF; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SecurityFormat: $.ASN1Decoder<SecurityFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityFormat (el: _Element): SecurityFormat {
    if (!_cached_decoder_for_SecurityFormat) { _cached_decoder_for_SecurityFormat = $._decodeBitString; }
    return _cached_decoder_for_SecurityFormat(el);
}

let _cached_encoder_for_SecurityFormat: $.ASN1Encoder<SecurityFormat> | null = null;

/**
 * @summary Encodes a(n) SecurityFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityFormat, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityFormat (value: SecurityFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityFormat) { _cached_encoder_for_SecurityFormat = $._encodeBitString; }
    return _cached_encoder_for_SecurityFormat(value, elGetter);
}


/* eslint-enable */
