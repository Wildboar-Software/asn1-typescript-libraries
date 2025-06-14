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

/* START_OF_SYMBOL_DEFINITION RangeOneToOne */
/**
 * @summary RangeOneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeOneToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeOneToOne */
let _cached_decoder_for_RangeOneToOne: $.ASN1Decoder<RangeOneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _decode_RangeOneToOne */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeOneToOne
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeOneToOne} The decoded data structure.
 */
export function _decode_RangeOneToOne(el: _Element) {
    if (!_cached_decoder_for_RangeOneToOne) {
        _cached_decoder_for_RangeOneToOne = $._decodeInteger;
    }
    return _cached_decoder_for_RangeOneToOne(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeOneToOne */
let _cached_encoder_for_RangeOneToOne: $.ASN1Encoder<RangeOneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeOneToOne */

/* START_OF_SYMBOL_DEFINITION _encode_RangeOneToOne */
/**
 * @summary Encodes a(n) RangeOneToOne into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeOneToOne, encoded as an ASN.1 Element.
 */
export function _encode_RangeOneToOne(
    value: RangeOneToOne,
    elGetter: $.ASN1Encoder<RangeOneToOne>
) {
    if (!_cached_encoder_for_RangeOneToOne) {
        _cached_encoder_for_RangeOneToOne = $._encodeInteger;
    }
    return _cached_encoder_for_RangeOneToOne(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeOneToOne */

/* eslint-enable */
