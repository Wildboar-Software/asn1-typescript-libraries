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

/* START_OF_SYMBOL_DEFINITION RangeZeroToMax */
/**
 * @summary RangeZeroToMax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RangeZeroToMax  ::=  INTEGER(0..MAX)
 * ```
 */
export type RangeZeroToMax = INTEGER;
/* END_OF_SYMBOL_DEFINITION RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeZeroToMax */
let _cached_decoder_for_RangeZeroToMax: $.ASN1Decoder<RangeZeroToMax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _decode_RangeZeroToMax */
/**
 * @summary Decodes an ASN.1 element into a(n) RangeZeroToMax
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RangeZeroToMax} The decoded data structure.
 */
export function _decode_RangeZeroToMax(el: _Element) {
    if (!_cached_decoder_for_RangeZeroToMax) {
        _cached_decoder_for_RangeZeroToMax = $._decodeInteger;
    }
    return _cached_decoder_for_RangeZeroToMax(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeZeroToMax */
let _cached_encoder_for_RangeZeroToMax: $.ASN1Encoder<RangeZeroToMax> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RangeZeroToMax */

/* START_OF_SYMBOL_DEFINITION _encode_RangeZeroToMax */
/**
 * @summary Encodes a(n) RangeZeroToMax into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RangeZeroToMax, encoded as an ASN.1 Element.
 */
export function _encode_RangeZeroToMax(
    value: RangeZeroToMax,
    elGetter: $.ASN1Encoder<RangeZeroToMax>
) {
    if (!_cached_encoder_for_RangeZeroToMax) {
        _cached_encoder_for_RangeZeroToMax = $._encodeInteger;
    }
    return _cached_encoder_for_RangeZeroToMax(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RangeZeroToMax */

/* eslint-enable */
