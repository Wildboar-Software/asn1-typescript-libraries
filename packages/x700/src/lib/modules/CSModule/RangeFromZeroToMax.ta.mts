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

/* START_OF_SYMBOL_DEFINITION RangeFromZeroToMax */
/**
 * @summary RangeFromZeroToMax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeFromZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeFromZeroToMax = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeFromZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromZeroToMax */
let _cached_decoder_for_RangeFromZeroToMax: $.ASN1Decoder<RangeFromZeroToMax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeFromZeroToMax */

/* START_OF_SYMBOL_DEFINITION _decode_RangeFromZeroToMax */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeFromZeroToMax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeFromZeroToMax} The decoded data structure.
 */
export function _decode_RangeFromZeroToMax(el: _Element) {
    if (!_cached_decoder_for_RangeFromZeroToMax) {
        _cached_decoder_for_RangeFromZeroToMax = $._decodeInteger;
    }
    return _cached_decoder_for_RangeFromZeroToMax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeFromZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromZeroToMax */
let _cached_encoder_for_RangeFromZeroToMax: $.ASN1Encoder<RangeFromZeroToMax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeFromZeroToMax */

/* START_OF_SYMBOL_DEFINITION _encode_RangeFromZeroToMax */
/**
 * @summary Encodes a(n) RangeFromZeroToMax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeFromZeroToMax, encoded as an ASN.1 Element.
 */
export function _encode_RangeFromZeroToMax(
    value: RangeFromZeroToMax,
    elGetter: $.ASN1Encoder<RangeFromZeroToMax>
) {
    if (!_cached_encoder_for_RangeFromZeroToMax) {
        _cached_encoder_for_RangeFromZeroToMax = $._encodeInteger;
    }
    return _cached_encoder_for_RangeFromZeroToMax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeFromZeroToMax */

/* eslint-enable */
