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

/* START_OF_SYMBOL_DEFINITION ObjectIdentifier */
/**
 * @summary ObjectIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ObjectIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectIdentifier */
let _cached_decoder_for_ObjectIdentifier: $.ASN1Decoder<ObjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdentifier} The decoded data structure.
 */
export function _decode_ObjectIdentifier(el: _Element) {
    if (!_cached_decoder_for_ObjectIdentifier) {
        _cached_decoder_for_ObjectIdentifier = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ObjectIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectIdentifier */
let _cached_encoder_for_ObjectIdentifier: $.ASN1Encoder<ObjectIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectIdentifier */
/**
 * @summary Encodes a(n) ObjectIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ObjectIdentifier(
    value: ObjectIdentifier,
    elGetter: $.ASN1Encoder<ObjectIdentifier>
) {
    if (!_cached_encoder_for_ObjectIdentifier) {
        _cached_encoder_for_ObjectIdentifier = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ObjectIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectIdentifier */

/* eslint-enable */
