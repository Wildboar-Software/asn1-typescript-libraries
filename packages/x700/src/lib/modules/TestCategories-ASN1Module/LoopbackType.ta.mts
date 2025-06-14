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

/* START_OF_SYMBOL_DEFINITION LoopbackType */
/**
 * @summary LoopbackType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LoopbackType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type LoopbackType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION LoopbackType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackType */
let _cached_decoder_for_LoopbackType: $.ASN1Decoder<LoopbackType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LoopbackType */

/* START_OF_SYMBOL_DEFINITION _decode_LoopbackType */
/**
 * @summary Decodes an ASN.1 element into a(n) LoopbackType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LoopbackType} The decoded data structure.
 */
export function _decode_LoopbackType(el: _Element) {
    if (!_cached_decoder_for_LoopbackType) {
        _cached_decoder_for_LoopbackType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_LoopbackType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LoopbackType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackType */
let _cached_encoder_for_LoopbackType: $.ASN1Encoder<LoopbackType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LoopbackType */

/* START_OF_SYMBOL_DEFINITION _encode_LoopbackType */
/**
 * @summary Encodes a(n) LoopbackType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoopbackType, encoded as an ASN.1 Element.
 */
export function _encode_LoopbackType(
    value: LoopbackType,
    elGetter: $.ASN1Encoder<LoopbackType>
) {
    if (!_cached_encoder_for_LoopbackType) {
        _cached_encoder_for_LoopbackType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_LoopbackType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LoopbackType */

/* eslint-enable */
