/* eslint-disable */
import {
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION BodyPartReference */
/**
 * @summary BodyPartReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartReference  ::=  INTEGER
 * ```
 */
export type BodyPartReference = INTEGER;
/* END_OF_SYMBOL_DEFINITION BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReference */
let _cached_decoder_for_BodyPartReference: $.ASN1Decoder<BodyPartReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartReference */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartReference} The decoded data structure.
 */
export function _decode_BodyPartReference(el: _Element) {
    if (!_cached_decoder_for_BodyPartReference) {
        _cached_decoder_for_BodyPartReference = $._decodeInteger;
    }
    return _cached_decoder_for_BodyPartReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReference */
let _cached_encoder_for_BodyPartReference: $.ASN1Encoder<BodyPartReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartReference */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartReference */
/**
 * @summary Encodes a(n) BodyPartReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartReference, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartReference(
    value: BodyPartReference,
    elGetter: $.ASN1Encoder<BodyPartReference>
) {
    if (!_cached_encoder_for_BodyPartReference) {
        _cached_encoder_for_BodyPartReference = $._encodeInteger;
    }
    return _cached_encoder_for_BodyPartReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartReference */

/* eslint-enable */
