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

/* START_OF_SYMBOL_DEFINITION SelectWeight */
/**
 * @summary SelectWeight
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SelectWeight  ::=  REAL(0..{mantissa 1, base 10, exponent 0})
 * ```
 */
export type SelectWeight = REAL; // RealType
/* END_OF_SYMBOL_DEFINITION SelectWeight */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectWeight */
let _cached_decoder_for_SelectWeight: $.ASN1Decoder<SelectWeight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _decode_SelectWeight */
/**
 * @summary Decodes an ASN.1 element into a(n) SelectWeight
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SelectWeight} The decoded data structure.
 */
export function _decode_SelectWeight(el: _Element) {
    if (!_cached_decoder_for_SelectWeight) {
        _cached_decoder_for_SelectWeight = $._decodeReal;
    }
    return _cached_decoder_for_SelectWeight(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectWeight */
let _cached_encoder_for_SelectWeight: $.ASN1Encoder<SelectWeight> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SelectWeight */

/* START_OF_SYMBOL_DEFINITION _encode_SelectWeight */
/**
 * @summary Encodes a(n) SelectWeight into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectWeight, encoded as an ASN.1 Element.
 */
export function _encode_SelectWeight(
    value: SelectWeight,
    elGetter: $.ASN1Encoder<SelectWeight>
) {
    if (!_cached_encoder_for_SelectWeight) {
        _cached_encoder_for_SelectWeight = $._encodeReal;
    }
    return _cached_encoder_for_SelectWeight(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SelectWeight */

/* eslint-enable */
