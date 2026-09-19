/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OnlyCertificateTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OnlyCertificateTypes  ::=  BIT STRING {
 *   user      (0),
 *   authority (1),
 *   attribute (2)}
 * ```
 */
export
type OnlyCertificateTypes = BIT_STRING;

/**
 * @summary OnlyCertificateTypes_user
 * @constant
 */
export
const OnlyCertificateTypes_user: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary user
 * @constant
 */
export
const user: number = OnlyCertificateTypes_user; /* SHORT_NAMED_BIT */

/**
 * @summary OnlyCertificateTypes_authority
 * @constant
 */
export
const OnlyCertificateTypes_authority: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary authority
 * @constant
 */
export
const authority: number = OnlyCertificateTypes_authority; /* SHORT_NAMED_BIT */

/**
 * @summary OnlyCertificateTypes_attribute
 * @constant
 */
export
const OnlyCertificateTypes_attribute: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary attribute
 * @constant
 */
export
const attribute: number = OnlyCertificateTypes_attribute; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OnlyCertificateTypes: $.ASN1Decoder<OnlyCertificateTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OnlyCertificateTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OnlyCertificateTypes (el: _Element): OnlyCertificateTypes {
    if (!_cached_decoder_for_OnlyCertificateTypes) { _cached_decoder_for_OnlyCertificateTypes = $._decodeBitString; }
    return _cached_decoder_for_OnlyCertificateTypes(el);
}

let _cached_encoder_for_OnlyCertificateTypes: $.ASN1Encoder<OnlyCertificateTypes> | null = null;

/**
 * @summary Encodes a(n) OnlyCertificateTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnlyCertificateTypes, encoded as an ASN.1 Element.
 */
export
function _encode_OnlyCertificateTypes (value: OnlyCertificateTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OnlyCertificateTypes) { _cached_encoder_for_OnlyCertificateTypes = $._encodeBitString; }
    return _cached_encoder_for_OnlyCertificateTypes(value, elGetter);
}


/* eslint-enable */
