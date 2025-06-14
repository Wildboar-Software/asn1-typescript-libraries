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

/* START_OF_SYMBOL_DEFINITION CirculationTime */
/**
 * @summary CirculationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationTime  ::=  GeneralizedTime
 * ```
 */
export type CirculationTime = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION CirculationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationTime */
let _cached_decoder_for_CirculationTime: $.ASN1Decoder<CirculationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) CirculationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationTime} The decoded data structure.
 */
export function _decode_CirculationTime(el: _Element) {
    if (!_cached_decoder_for_CirculationTime) {
        _cached_decoder_for_CirculationTime = $._decodeGeneralizedTime;
    }
    return _cached_decoder_for_CirculationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationTime */
let _cached_encoder_for_CirculationTime: $.ASN1Encoder<CirculationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationTime */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationTime */
/**
 * @summary Encodes a(n) CirculationTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationTime, encoded as an ASN.1 Element.
 */
export function _encode_CirculationTime(
    value: CirculationTime,
    elGetter: $.ASN1Encoder<CirculationTime>
) {
    if (!_cached_encoder_for_CirculationTime) {
        _cached_encoder_for_CirculationTime = $._encodeGeneralizedTime;
    }
    return _cached_encoder_for_CirculationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CirculationTime */

/* eslint-enable */
