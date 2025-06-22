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
    ArcTime,
    _decode_ArcTime,
    _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta.mjs';

/**
 * @summary ArcDefaultNALMTIInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcDefaultNALMTIInterval  ::=  ArcTime
 * ```
 */
export type ArcDefaultNALMTIInterval = ArcTime; // DefinedType


let _cached_decoder_for_ArcDefaultNALMTIInterval: $.ASN1Decoder<ArcDefaultNALMTIInterval> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcDefaultNALMTIInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcDefaultNALMTIInterval} The decoded data structure.
 */
export function _decode_ArcDefaultNALMTIInterval(el: _Element) {
    if (!_cached_decoder_for_ArcDefaultNALMTIInterval) {
        _cached_decoder_for_ArcDefaultNALMTIInterval = _decode_ArcTime;
    }
    return _cached_decoder_for_ArcDefaultNALMTIInterval(el);
}


let _cached_encoder_for_ArcDefaultNALMTIInterval: $.ASN1Encoder<ArcDefaultNALMTIInterval> | null = null;


/**
 * @summary Encodes a(n) ArcDefaultNALMTIInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcDefaultNALMTIInterval, encoded as an ASN.1 Element.
 */
export function _encode_ArcDefaultNALMTIInterval(
    value: ArcDefaultNALMTIInterval,
    elGetter: $.ASN1Encoder<ArcDefaultNALMTIInterval>
) {
    if (!_cached_encoder_for_ArcDefaultNALMTIInterval) {
        _cached_encoder_for_ArcDefaultNALMTIInterval = _encode_ArcTime;
    }
    return _cached_encoder_for_ArcDefaultNALMTIInterval(value, elGetter);
}


/* eslint-enable */
