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

/* START_OF_SYMBOL_DEFINITION PerMessageComponentRate */
/**
 * @summary PerMessageComponentRate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerMessageComponentRate  ::=  INTEGER
 * ```
 */
export type PerMessageComponentRate = INTEGER;
/* END_OF_SYMBOL_DEFINITION PerMessageComponentRate */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageComponentRate */
let _cached_decoder_for_PerMessageComponentRate: $.ASN1Decoder<PerMessageComponentRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerMessageComponentRate */

/* START_OF_SYMBOL_DEFINITION _decode_PerMessageComponentRate */
/**
 * @summary Decodes an ASN.1 element into a(n) PerMessageComponentRate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerMessageComponentRate} The decoded data structure.
 */
export function _decode_PerMessageComponentRate(el: _Element) {
    if (!_cached_decoder_for_PerMessageComponentRate) {
        _cached_decoder_for_PerMessageComponentRate = $._decodeInteger;
    }
    return _cached_decoder_for_PerMessageComponentRate(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerMessageComponentRate */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageComponentRate */
let _cached_encoder_for_PerMessageComponentRate: $.ASN1Encoder<PerMessageComponentRate> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerMessageComponentRate */

/* START_OF_SYMBOL_DEFINITION _encode_PerMessageComponentRate */
/**
 * @summary Encodes a(n) PerMessageComponentRate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerMessageComponentRate, encoded as an ASN.1 Element.
 */
export function _encode_PerMessageComponentRate(
    value: PerMessageComponentRate,
    elGetter: $.ASN1Encoder<PerMessageComponentRate>
) {
    if (!_cached_encoder_for_PerMessageComponentRate) {
        _cached_encoder_for_PerMessageComponentRate = $._encodeInteger;
    }
    return _cached_encoder_for_PerMessageComponentRate(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerMessageComponentRate */

/* eslint-enable */
