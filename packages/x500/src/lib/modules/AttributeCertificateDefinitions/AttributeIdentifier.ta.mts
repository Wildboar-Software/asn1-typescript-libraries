/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
/* START_OF_SYMBOL_DEFINITION AttributeIdentifier */
/**
 * @summary AttributeIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeIdentifier  ::=  ATTRIBUTE.&id({AttributeIDs})
 * ```
 */
export type AttributeIdentifier = OBJECT_IDENTIFIER; // ObjectClassFieldType
/* END_OF_SYMBOL_DEFINITION AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifier */
let _cached_decoder_for_AttributeIdentifier: $.ASN1Decoder<AttributeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeIdentifier} The decoded data structure.
 */
export function _decode_AttributeIdentifier(el: _Element) {
    if (!_cached_decoder_for_AttributeIdentifier) {
        _cached_decoder_for_AttributeIdentifier = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifier */
let _cached_encoder_for_AttributeIdentifier: $.ASN1Encoder<AttributeIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeIdentifier */
/**
 * @summary Encodes a(n) AttributeIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_AttributeIdentifier(
    value: AttributeIdentifier,
    elGetter: $.ASN1Encoder<AttributeIdentifier>
) {
    if (!_cached_encoder_for_AttributeIdentifier) {
        _cached_encoder_for_AttributeIdentifier = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeIdentifier */

/* eslint-enable */
