/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PropertyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyID  ::=  OCTET STRING
 * ```
 */
export
type PropertyID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PropertyID: $.ASN1Decoder<PropertyID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PropertyID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PropertyID (el: _Element): PropertyID {
    if (!_cached_decoder_for_PropertyID) { _cached_decoder_for_PropertyID = $._decodeOctetString; }
    return _cached_decoder_for_PropertyID(el);
}

let _cached_encoder_for_PropertyID: $.ASN1Encoder<PropertyID> | null = null;

/**
 * @summary Encodes a(n) PropertyID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PropertyID, encoded as an ASN.1 Element.
 */
export
function _encode_PropertyID (value: PropertyID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PropertyID) { _cached_encoder_for_PropertyID = $._encodeOctetString; }
    return _cached_encoder_for_PropertyID(value, elGetter);
}


/* eslint-enable */
