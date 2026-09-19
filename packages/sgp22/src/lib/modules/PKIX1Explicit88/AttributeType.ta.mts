/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeType            ::=   OBJECT IDENTIFIER
 * ```
 */
export
type AttributeType = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_AttributeType: $.ASN1Decoder<AttributeType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeType (el: _Element): AttributeType {
    if (!_cached_decoder_for_AttributeType) { _cached_decoder_for_AttributeType = $._decodeObjectIdentifier; }
    return _cached_decoder_for_AttributeType(el);
}

let _cached_encoder_for_AttributeType: $.ASN1Encoder<AttributeType> | null = null;

/**
 * @summary Encodes a(n) AttributeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeType, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeType (value: AttributeType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeType) { _cached_encoder_for_AttributeType = $._encodeObjectIdentifier; }
    return _cached_encoder_for_AttributeType(value, elGetter);
}


/* eslint-enable */
