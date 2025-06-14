/* eslint-disable */
import {
    GeneralizedTime,
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

/* START_OF_SYMBOL_DEFINITION ReceivedTime */
/**
 * @summary ReceivedTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReceivedTime  ::=  GeneralizedTime
 * ```
 */
export type ReceivedTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION ReceivedTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceivedTime */
let _cached_decoder_for_ReceivedTime: $.ASN1Decoder<ReceivedTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReceivedTime */

/* START_OF_SYMBOL_DEFINITION _decode_ReceivedTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ReceivedTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReceivedTime} The decoded data structure.
 */
export function _decode_ReceivedTime(el: _Element) {
    if (!_cached_decoder_for_ReceivedTime) {
        _cached_decoder_for_ReceivedTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_ReceivedTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReceivedTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceivedTime */
let _cached_encoder_for_ReceivedTime: $.ASN1Encoder<ReceivedTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReceivedTime */

/* START_OF_SYMBOL_DEFINITION _encode_ReceivedTime */
/**
 * @summary Encodes a(n) ReceivedTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReceivedTime, encoded as an ASN.1 Element.
 */
export function _encode_ReceivedTime(
    value: ReceivedTime,
    elGetter: $.ASN1Encoder<ReceivedTime>
) {
    if (!_cached_encoder_for_ReceivedTime) {
        _cached_encoder_for_ReceivedTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_ReceivedTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReceivedTime */

/* eslint-enable */
