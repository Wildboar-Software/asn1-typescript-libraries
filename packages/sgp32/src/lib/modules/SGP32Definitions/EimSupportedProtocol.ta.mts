/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EimSupportedProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimSupportedProtocol  ::=  BIT STRING {
 *     eimRetrieveHttps(0),
 *     eimRetrieveCoaps(1),
 *     eimInjectHttps(2),
 *     eimInjectCoaps(3),
 *     eimProprietary(4)
 * }
 * ```
 */
export
type EimSupportedProtocol = BIT_STRING;

/**
 * @summary EimSupportedProtocol_eimRetrieveHttps
 * @constant
 */
export
const EimSupportedProtocol_eimRetrieveHttps: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveHttps
 * @constant
 */
export
const eimRetrieveHttps: number = EimSupportedProtocol_eimRetrieveHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimRetrieveCoaps
 * @constant
 */
export
const EimSupportedProtocol_eimRetrieveCoaps: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary eimRetrieveCoaps
 * @constant
 */
export
const eimRetrieveCoaps: number = EimSupportedProtocol_eimRetrieveCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectHttps
 * @constant
 */
export
const EimSupportedProtocol_eimInjectHttps: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectHttps
 * @constant
 */
export
const eimInjectHttps: number = EimSupportedProtocol_eimInjectHttps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimInjectCoaps
 * @constant
 */
export
const EimSupportedProtocol_eimInjectCoaps: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary eimInjectCoaps
 * @constant
 */
export
const eimInjectCoaps: number = EimSupportedProtocol_eimInjectCoaps; /* SHORT_NAMED_BIT */

/**
 * @summary EimSupportedProtocol_eimProprietary
 * @constant
 */
export
const EimSupportedProtocol_eimProprietary: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary eimProprietary
 * @constant
 */
export
const eimProprietary: number = EimSupportedProtocol_eimProprietary; /* SHORT_NAMED_BIT */

let _cached_decoder_for_EimSupportedProtocol: $.ASN1Decoder<EimSupportedProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimSupportedProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimSupportedProtocol (el: _Element): EimSupportedProtocol {
    if (!_cached_decoder_for_EimSupportedProtocol) { _cached_decoder_for_EimSupportedProtocol = $._decodeBitString; }
    return _cached_decoder_for_EimSupportedProtocol(el);
}

let _cached_encoder_for_EimSupportedProtocol: $.ASN1Encoder<EimSupportedProtocol> | null = null;

/**
 * @summary Encodes a(n) EimSupportedProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimSupportedProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_EimSupportedProtocol (value: EimSupportedProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimSupportedProtocol) { _cached_encoder_for_EimSupportedProtocol = $._encodeBitString; }
    return _cached_encoder_for_EimSupportedProtocol(value, elGetter);
}


/* eslint-enable */
