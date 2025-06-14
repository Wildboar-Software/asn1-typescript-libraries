/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION AttributeId */
/**
 * @summary AttributeId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AttributeId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AttributeId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeId */
let _cached_decoder_for_AttributeId: $.ASN1Decoder<AttributeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AttributeId */

/* START_OF_SYMBOL_DEFINITION _decode_AttributeId */
/**
 * @summary Decodes an ASN.1 element into a(n) AttributeId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeId} The decoded data structure.
 */
export function _decode_AttributeId(el: _Element) {
    if (!_cached_decoder_for_AttributeId) {
        _cached_decoder_for_AttributeId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_AttributeId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AttributeId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeId */
let _cached_encoder_for_AttributeId: $.ASN1Encoder<AttributeId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AttributeId */

/* START_OF_SYMBOL_DEFINITION _encode_AttributeId */
/**
 * @summary Encodes a(n) AttributeId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeId, encoded as an ASN.1 Element.
 */
export function _encode_AttributeId(
    value: AttributeId,
    elGetter: $.ASN1Encoder<AttributeId>
) {
    if (!_cached_encoder_for_AttributeId) {
        _cached_encoder_for_AttributeId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_AttributeId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AttributeId */

/* eslint-enable */
