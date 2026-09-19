/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { OPEN } from "../CryptographicMessageSyntax/OPEN.oca.mjs";


/**
 * @summary AttributeValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeValue  ::=  OPEN.&Type
 * ```
 */
export
type AttributeValue = _Element; // ObjectClassFieldType

let _cached_decoder_for_AttributeValue: $.ASN1Decoder<AttributeValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeValue (el: _Element): AttributeValue {
    if (!_cached_decoder_for_AttributeValue) { _cached_decoder_for_AttributeValue = $._decodeAny; }
    return _cached_decoder_for_AttributeValue(el);
}

let _cached_encoder_for_AttributeValue: $.ASN1Encoder<AttributeValue> | null = null;

/**
 * @summary Encodes a(n) AttributeValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeValue, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeValue (value: AttributeValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeValue) { _cached_encoder_for_AttributeValue = $._encodeAny; }
    return _cached_encoder_for_AttributeValue(value, elGetter);
}


/* eslint-enable */
