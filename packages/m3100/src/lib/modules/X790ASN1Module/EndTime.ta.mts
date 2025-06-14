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

/* START_OF_SYMBOL_DEFINITION EndTime */
/**
 * @summary EndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndTime  ::=  GeneralizedTime
 * ```
 */
export type EndTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */
let _cached_decoder_for_EndTime: $.ASN1Decoder<EndTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _decode_EndTime */
/**
 * @summary Decodes an ASN.1 element into a(n) EndTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndTime} The decoded data structure.
 */
export function _decode_EndTime(el: _Element) {
    if (!_cached_decoder_for_EndTime) {
        _cached_decoder_for_EndTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_EndTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */
let _cached_encoder_for_EndTime: $.ASN1Encoder<EndTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _encode_EndTime */
/**
 * @summary Encodes a(n) EndTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndTime, encoded as an ASN.1 Element.
 */
export function _encode_EndTime(
    value: EndTime,
    elGetter: $.ASN1Encoder<EndTime>
) {
    if (!_cached_encoder_for_EndTime) {
        _cached_encoder_for_EndTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_EndTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndTime */

/* eslint-enable */
