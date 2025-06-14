/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION AlertResult */
/**
 * @summary AlertResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertResult  ::=  NULL
 * ```
 */
export type AlertResult = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION AlertResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertResult */
let _cached_decoder_for_AlertResult: $.ASN1Decoder<AlertResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AlertResult */

/* START_OF_SYMBOL_DEFINITION _decode_AlertResult */
/**
 * @summary Decodes an ASN.1 element into a(n) AlertResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertResult} The decoded data structure.
 */
export function _decode_AlertResult(el: _Element) {
    if (!_cached_decoder_for_AlertResult) {
        _cached_decoder_for_AlertResult = $._decodeNull;
    }
    return _cached_decoder_for_AlertResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AlertResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertResult */
let _cached_encoder_for_AlertResult: $.ASN1Encoder<AlertResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AlertResult */

/* START_OF_SYMBOL_DEFINITION _encode_AlertResult */
/**
 * @summary Encodes a(n) AlertResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertResult, encoded as an ASN.1 Element.
 */
export function _encode_AlertResult(
    value: AlertResult,
    elGetter: $.ASN1Encoder<AlertResult>
) {
    if (!_cached_encoder_for_AlertResult) {
        _cached_encoder_for_AlertResult = $._encodeNull;
    }
    return _cached_encoder_for_AlertResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AlertResult */

/* eslint-enable */
