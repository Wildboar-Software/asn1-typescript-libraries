/* eslint-disable */
import {
    REAL,
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

/* START_OF_SYMBOL_DEFINITION FilterWeight */
/**
 * @summary FilterWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterWeight  ::=  REAL(0..{mantissa 1, base 10, exponent 0})
 * ```
 */
export type FilterWeight = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION FilterWeight */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterWeight */
let _cached_decoder_for_FilterWeight: $.ASN1Decoder<FilterWeight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _decode_FilterWeight */
/**
 * @summary Decodes an ASN.1 element into a(n) FilterWeight
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterWeight} The decoded data structure.
 */
export function _decode_FilterWeight(el: _Element) {
    if (!_cached_decoder_for_FilterWeight) {
        _cached_decoder_for_FilterWeight = $._decodeReal;
    }
    return _cached_decoder_for_FilterWeight(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterWeight */
let _cached_encoder_for_FilterWeight: $.ASN1Encoder<FilterWeight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FilterWeight */

/* START_OF_SYMBOL_DEFINITION _encode_FilterWeight */
/**
 * @summary Encodes a(n) FilterWeight into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterWeight, encoded as an ASN.1 Element.
 */
export function _encode_FilterWeight(
    value: FilterWeight,
    elGetter: $.ASN1Encoder<FilterWeight>
) {
    if (!_cached_encoder_for_FilterWeight) {
        _cached_encoder_for_FilterWeight = $._encodeReal;
    }
    return _cached_encoder_for_FilterWeight(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FilterWeight */

/* eslint-enable */
