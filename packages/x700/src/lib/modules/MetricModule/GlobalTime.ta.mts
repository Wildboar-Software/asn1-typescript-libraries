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

/* START_OF_SYMBOL_DEFINITION GlobalTime */
/**
 * @summary GlobalTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GlobalTime  ::=  GeneralizedTime
 * ```
 */
export type GlobalTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION GlobalTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GlobalTime */
let _cached_decoder_for_GlobalTime: $.ASN1Decoder<GlobalTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _decode_GlobalTime */
/**
 * @summary Decodes an ASN.1 element into a(n) GlobalTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GlobalTime} The decoded data structure.
 */
export function _decode_GlobalTime(el: _Element) {
    if (!_cached_decoder_for_GlobalTime) {
        _cached_decoder_for_GlobalTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_GlobalTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GlobalTime */
let _cached_encoder_for_GlobalTime: $.ASN1Encoder<GlobalTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GlobalTime */

/* START_OF_SYMBOL_DEFINITION _encode_GlobalTime */
/**
 * @summary Encodes a(n) GlobalTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalTime, encoded as an ASN.1 Element.
 */
export function _encode_GlobalTime(
    value: GlobalTime,
    elGetter: $.ASN1Encoder<GlobalTime>
) {
    if (!_cached_encoder_for_GlobalTime) {
        _cached_encoder_for_GlobalTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_GlobalTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GlobalTime */

/* eslint-enable */
