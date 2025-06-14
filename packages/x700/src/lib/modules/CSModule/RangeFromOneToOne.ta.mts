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

/* START_OF_SYMBOL_DEFINITION RangeFromOneToOne */
/**
 * @summary RangeFromOneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromOneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type RangeFromOneToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromOneToOne */
let _cached_decoder_for_RangeFromOneToOne: $.ASN1Decoder<RangeFromOneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _decode_RangeFromOneToOne */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeFromOneToOne
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeFromOneToOne} The decoded data structure.
 */
export function _decode_RangeFromOneToOne(el: _Element) {
    if (!_cached_decoder_for_RangeFromOneToOne) {
        _cached_decoder_for_RangeFromOneToOne = $._decodeInteger;
    }
    return _cached_decoder_for_RangeFromOneToOne(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromOneToOne */
let _cached_encoder_for_RangeFromOneToOne: $.ASN1Encoder<RangeFromOneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromOneToOne */

/* START_OF_SYMBOL_DEFINITION _encode_RangeFromOneToOne */
/**
 * @summary Encodes a(n) RangeFromOneToOne into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeFromOneToOne, encoded as an ASN.1 Element.
 */
export function _encode_RangeFromOneToOne(
    value: RangeFromOneToOne,
    elGetter: $.ASN1Encoder<RangeFromOneToOne>
) {
    if (!_cached_encoder_for_RangeFromOneToOne) {
        _cached_encoder_for_RangeFromOneToOne = $._encodeInteger;
    }
    return _cached_encoder_for_RangeFromOneToOne(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeFromOneToOne */

/* eslint-enable */
