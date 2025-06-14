/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION RecipientReference */
/**
 * @summary RecipientReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientReference  ::=  TeletexString(SIZE (1..ub-recipient-reference))
 * ```
 */
export type RecipientReference = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION RecipientReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReference */
let _cached_decoder_for_RecipientReference: $.ASN1Decoder<RecipientReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientReference */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientReference */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientReference} The decoded data structure.
 */
export function _decode_RecipientReference(el: _Element) {
    if (!_cached_decoder_for_RecipientReference) {
        _cached_decoder_for_RecipientReference = $._decodeTeletexString;
    }
    return _cached_decoder_for_RecipientReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReference */
let _cached_encoder_for_RecipientReference: $.ASN1Encoder<RecipientReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientReference */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientReference */
/**
 * @summary Encodes a(n) RecipientReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientReference, encoded as an ASN.1 Element.
 */
export function _encode_RecipientReference(
    value: RecipientReference,
    elGetter: $.ASN1Encoder<RecipientReference>
) {
    if (!_cached_encoder_for_RecipientReference) {
        _cached_encoder_for_RecipientReference = $._encodeTeletexString;
    }
    return _cached_encoder_for_RecipientReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientReference */

/* eslint-enable */
