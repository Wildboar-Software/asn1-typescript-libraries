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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TimeInterval,
    _decode_TimeInterval,
    _encode_TimeInterval,
} from '../TimeMF/TimeInterval.ta.mjs';
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

let _cached_decoder_for_MaxAperature: $.ASN1Decoder<MaxAperature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxAperature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxAperature} The decoded data structure.
 */
export function _decode_MaxAperature(el: _Element): MaxAperature {
    if (!_cached_decoder_for_MaxAperature) {
        _cached_decoder_for_MaxAperature = _decode_TimeInterval;
    }
    return _cached_decoder_for_MaxAperature(el);
}

let _cached_encoder_for_MaxAperature: $.ASN1Encoder<MaxAperature> | null = null;

/**
 * @summary Encodes a(n) MaxAperature into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxAperature, encoded as an ASN.1 Element.
 */
export function _encode_MaxAperature(
    value: MaxAperature,
    elGetter: $.ASN1Encoder<MaxAperature>
): _Element {
    if (!_cached_encoder_for_MaxAperature) {
        _cached_encoder_for_MaxAperature = _encode_TimeInterval;
    }
    return _cached_encoder_for_MaxAperature(value, elGetter);
}


/* eslint-enable */
