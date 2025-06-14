/* eslint-disable */
import {
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
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MaxAperature */
/**
 * @summary MaxAperature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxAperature  ::=  TimeInterval
 * ```
 */
export type MaxAperature = TimeInterval; // DefinedType
/* END_OF_SYMBOL_DEFINITION MaxAperature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxAperature */
let _cached_decoder_for_MaxAperature: $.ASN1Decoder<MaxAperature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxAperature */

/* START_OF_SYMBOL_DEFINITION _decode_MaxAperature */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxAperature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxAperature} The decoded data structure.
 */
export function _decode_MaxAperature(el: _Element) {
    if (!_cached_decoder_for_MaxAperature) {
        _cached_decoder_for_MaxAperature = _decode_TimeInterval;
    }
    return _cached_decoder_for_MaxAperature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxAperature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxAperature */
let _cached_encoder_for_MaxAperature: $.ASN1Encoder<MaxAperature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxAperature */

/* START_OF_SYMBOL_DEFINITION _encode_MaxAperature */
/**
 * @summary Encodes a(n) MaxAperature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxAperature, encoded as an ASN.1 Element.
 */
export function _encode_MaxAperature(
    value: MaxAperature,
    elGetter: $.ASN1Encoder<MaxAperature>
) {
    if (!_cached_encoder_for_MaxAperature) {
        _cached_encoder_for_MaxAperature = _encode_TimeInterval;
    }
    return _cached_encoder_for_MaxAperature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxAperature */

/* eslint-enable */
