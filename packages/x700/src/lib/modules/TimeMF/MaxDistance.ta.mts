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
 * @summary MaxDistance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxDistance  ::=  TimeInterval
 * ```
 */
export type MaxDistance = TimeInterval; // DefinedType

let _cached_decoder_for_MaxDistance: $.ASN1Decoder<MaxDistance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxDistance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxDistance} The decoded data structure.
 */
export function _decode_MaxDistance(el: _Element) {
    if (!_cached_decoder_for_MaxDistance) {
        _cached_decoder_for_MaxDistance = _decode_TimeInterval;
    }
    return _cached_decoder_for_MaxDistance(el);
}

let _cached_encoder_for_MaxDistance: $.ASN1Encoder<MaxDistance> | null = null;

/**
 * @summary Encodes a(n) MaxDistance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxDistance, encoded as an ASN.1 Element.
 */
export function _encode_MaxDistance(
    value: MaxDistance,
    elGetter: $.ASN1Encoder<MaxDistance>
) {
    if (!_cached_encoder_for_MaxDistance) {
        _cached_encoder_for_MaxDistance = _encode_TimeInterval;
    }
    return _cached_encoder_for_MaxDistance(value, elGetter);
}


/* eslint-enable */
