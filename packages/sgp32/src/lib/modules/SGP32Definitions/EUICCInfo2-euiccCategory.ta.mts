/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUICCInfo2_euiccCategory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUICCInfo2-euiccCategory ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EUICCInfo2_euiccCategory = INTEGER;

/**
 * @summary EUICCInfo2_euiccCategory_other
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_other: EUICCInfo2_euiccCategory = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_other
 * @constant
 * @type {number}
 */
export
const other: EUICCInfo2_euiccCategory = EUICCInfo2_euiccCategory_other; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_basicEuicc: EUICCInfo2_euiccCategory = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_basicEuicc
 * @constant
 * @type {number}
 */
export
const basicEuicc: EUICCInfo2_euiccCategory = EUICCInfo2_euiccCategory_basicEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_mediumEuicc: EUICCInfo2_euiccCategory = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_mediumEuicc
 * @constant
 * @type {number}
 */
export
const mediumEuicc: EUICCInfo2_euiccCategory = EUICCInfo2_euiccCategory_mediumEuicc; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @constant
 * @type {number}
 */
export
const EUICCInfo2_euiccCategory_contactlessEuicc: EUICCInfo2_euiccCategory = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EUICCInfo2_euiccCategory_contactlessEuicc
 * @constant
 * @type {number}
 */
export
const contactlessEuicc: EUICCInfo2_euiccCategory = EUICCInfo2_euiccCategory_contactlessEuicc; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_EUICCInfo2_euiccCategory: $.ASN1Decoder<EUICCInfo2_euiccCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EUICCInfo2_euiccCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EUICCInfo2_euiccCategory (el: _Element): EUICCInfo2_euiccCategory {
    if (!_cached_decoder_for_EUICCInfo2_euiccCategory) { _cached_decoder_for_EUICCInfo2_euiccCategory = $._decodeInteger; }
    return _cached_decoder_for_EUICCInfo2_euiccCategory(el);
}

let _cached_encoder_for_EUICCInfo2_euiccCategory: $.ASN1Encoder<EUICCInfo2_euiccCategory> | null = null;

/**
 * @summary Encodes a(n) EUICCInfo2_euiccCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EUICCInfo2_euiccCategory, encoded as an ASN.1 Element.
 */
export
function _encode_EUICCInfo2_euiccCategory (value: EUICCInfo2_euiccCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EUICCInfo2_euiccCategory) { _cached_encoder_for_EUICCInfo2_euiccCategory = $._encodeInteger; }
    return _cached_encoder_for_EUICCInfo2_euiccCategory(value, elGetter);
}


/* eslint-enable */
