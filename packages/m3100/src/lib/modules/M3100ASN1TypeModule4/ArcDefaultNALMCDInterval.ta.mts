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
import * as $ from '@wildboar/asn1/functional';
import {
    ArcTime,
    _decode_ArcTime,
    _encode_ArcTime,
} from '../M3100ASN1TypeModule4/ArcTime.ta.mjs';

/**
 * @summary ArcDefaultNALMCDInterval
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArcDefaultNALMCDInterval  ::=  ArcTime
 * ```
 */
export type ArcDefaultNALMCDInterval = ArcTime; // DefinedType


let _cached_decoder_for_ArcDefaultNALMCDInterval: $.ASN1Decoder<ArcDefaultNALMCDInterval> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ArcDefaultNALMCDInterval
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ArcDefaultNALMCDInterval} The decoded data structure.
 */
export function _decode_ArcDefaultNALMCDInterval(el: _Element) {
    if (!_cached_decoder_for_ArcDefaultNALMCDInterval) {
        _cached_decoder_for_ArcDefaultNALMCDInterval = _decode_ArcTime;
    }
    return _cached_decoder_for_ArcDefaultNALMCDInterval(el);
}


let _cached_encoder_for_ArcDefaultNALMCDInterval: $.ASN1Encoder<ArcDefaultNALMCDInterval> | null = null;


/**
 * @summary Encodes a(n) ArcDefaultNALMCDInterval into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ArcDefaultNALMCDInterval, encoded as an ASN.1 Element.
 */
export function _encode_ArcDefaultNALMCDInterval(
    value: ArcDefaultNALMCDInterval,
    elGetter: $.ASN1Encoder<ArcDefaultNALMCDInterval>
) {
    if (!_cached_encoder_for_ArcDefaultNALMCDInterval) {
        _cached_encoder_for_ArcDefaultNALMCDInterval = _encode_ArcTime;
    }
    return _cached_encoder_for_ArcDefaultNALMCDInterval(value, elGetter);
}


/* eslint-enable */
