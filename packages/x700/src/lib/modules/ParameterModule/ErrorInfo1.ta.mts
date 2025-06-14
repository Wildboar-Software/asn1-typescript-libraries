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

/* START_OF_SYMBOL_DEFINITION ErrorInfo1 */
/**
 * @summary ErrorInfo1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorInfo1  ::=  INTEGER
 * ```
 */
export type ErrorInfo1 = INTEGER;
/* END_OF_SYMBOL_DEFINITION ErrorInfo1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorInfo1 */
let _cached_decoder_for_ErrorInfo1: $.ASN1Decoder<ErrorInfo1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorInfo1 */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorInfo1 */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorInfo1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorInfo1} The decoded data structure.
 */
export function _decode_ErrorInfo1(el: _Element) {
    if (!_cached_decoder_for_ErrorInfo1) {
        _cached_decoder_for_ErrorInfo1 = $._decodeInteger;
    }
    return _cached_decoder_for_ErrorInfo1(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorInfo1 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorInfo1 */
let _cached_encoder_for_ErrorInfo1: $.ASN1Encoder<ErrorInfo1> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorInfo1 */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorInfo1 */
/**
 * @summary Encodes a(n) ErrorInfo1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorInfo1, encoded as an ASN.1 Element.
 */
export function _encode_ErrorInfo1(
    value: ErrorInfo1,
    elGetter: $.ASN1Encoder<ErrorInfo1>
) {
    if (!_cached_encoder_for_ErrorInfo1) {
        _cached_encoder_for_ErrorInfo1 = $._encodeInteger;
    }
    return _cached_encoder_for_ErrorInfo1(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorInfo1 */

/* eslint-enable */
