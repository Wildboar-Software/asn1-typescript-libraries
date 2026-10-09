/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AttributeSetId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetId   ::=  OBJECT IDENTIFIER
 * ```
 */
export
type AttributeSetId = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_AttributeSetId: $.ASN1Decoder<AttributeSetId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSetId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeSetId (el: _Element): AttributeSetId {
    if (!_cached_decoder_for_AttributeSetId) { _cached_decoder_for_AttributeSetId = $._decodeObjectIdentifier; }
    return _cached_decoder_for_AttributeSetId(el);
}

let _cached_encoder_for_AttributeSetId: $.ASN1Encoder<AttributeSetId> | null = null;

/**
 * @summary Encodes a(n) AttributeSetId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSetId, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeSetId (value: AttributeSetId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeSetId) { _cached_encoder_for_AttributeSetId = $._encodeObjectIdentifier; }
    return _cached_encoder_for_AttributeSetId(value, elGetter);
}


/* eslint-enable */
