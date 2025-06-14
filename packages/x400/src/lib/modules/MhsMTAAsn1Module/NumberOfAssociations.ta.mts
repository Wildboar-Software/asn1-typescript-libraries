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

/* START_OF_SYMBOL_DEFINITION NumberOfAssociations */
/**
 * @summary NumberOfAssociations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NumberOfAssociations  ::=  INTEGER
 * ```
 */
export type NumberOfAssociations = INTEGER;
/* END_OF_SYMBOL_DEFINITION NumberOfAssociations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAssociations */
let _cached_decoder_for_NumberOfAssociations: $.ASN1Decoder<NumberOfAssociations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NumberOfAssociations */

/* START_OF_SYMBOL_DEFINITION _decode_NumberOfAssociations */
/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfAssociations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NumberOfAssociations} The decoded data structure.
 */
export function _decode_NumberOfAssociations(el: _Element) {
    if (!_cached_decoder_for_NumberOfAssociations) {
        _cached_decoder_for_NumberOfAssociations = $._decodeInteger;
    }
    return _cached_decoder_for_NumberOfAssociations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NumberOfAssociations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAssociations */
let _cached_encoder_for_NumberOfAssociations: $.ASN1Encoder<NumberOfAssociations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NumberOfAssociations */

/* START_OF_SYMBOL_DEFINITION _encode_NumberOfAssociations */
/**
 * @summary Encodes a(n) NumberOfAssociations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfAssociations, encoded as an ASN.1 Element.
 */
export function _encode_NumberOfAssociations(
    value: NumberOfAssociations,
    elGetter: $.ASN1Encoder<NumberOfAssociations>
) {
    if (!_cached_encoder_for_NumberOfAssociations) {
        _cached_encoder_for_NumberOfAssociations = $._encodeInteger;
    }
    return _cached_encoder_for_NumberOfAssociations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NumberOfAssociations */

/* eslint-enable */
