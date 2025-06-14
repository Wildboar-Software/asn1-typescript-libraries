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

/* START_OF_SYMBOL_DEFINITION EDIBodyPartType */
/**
 * @summary EDIBodyPartType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIBodyPartType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type EDIBodyPartType = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION EDIBodyPartType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIBodyPartType */
let _cached_decoder_for_EDIBodyPartType: $.ASN1Decoder<EDIBodyPartType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIBodyPartType */

/* START_OF_SYMBOL_DEFINITION _decode_EDIBodyPartType */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIBodyPartType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIBodyPartType} The decoded data structure.
 */
export function _decode_EDIBodyPartType(el: _Element) {
    if (!_cached_decoder_for_EDIBodyPartType) {
        _cached_decoder_for_EDIBodyPartType = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_EDIBodyPartType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIBodyPartType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIBodyPartType */
let _cached_encoder_for_EDIBodyPartType: $.ASN1Encoder<EDIBodyPartType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIBodyPartType */

/* START_OF_SYMBOL_DEFINITION _encode_EDIBodyPartType */
/**
 * @summary Encodes a(n) EDIBodyPartType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIBodyPartType, encoded as an ASN.1 Element.
 */
export function _encode_EDIBodyPartType(
    value: EDIBodyPartType,
    elGetter: $.ASN1Encoder<EDIBodyPartType>
) {
    if (!_cached_encoder_for_EDIBodyPartType) {
        _cached_encoder_for_EDIBodyPartType = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_EDIBodyPartType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIBodyPartType */

/* eslint-enable */
