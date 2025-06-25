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
    WeekMaskWps,
    _decode_WeekMaskWps,
    _encode_WeekMaskWps,
} from '../Schedulerev1-ASN1Module/WeekMaskWps.ta.mjs';

/**
 * @summary SequenceOfWeeks
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceOfWeeks  ::=  SEQUENCE OF WeekMaskWps
 * ```
 */
export type SequenceOfWeeks = WeekMaskWps[]; // SequenceOfType


let _cached_decoder_for_SequenceOfWeeks: $.ASN1Decoder<SequenceOfWeeks> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SequenceOfWeeks
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SequenceOfWeeks} The decoded data structure.
 */
export function _decode_SequenceOfWeeks(el: _Element): SequenceOfWeeks {
    if (!_cached_decoder_for_SequenceOfWeeks) {
        _cached_decoder_for_SequenceOfWeeks = $._decodeSequenceOf<WeekMaskWps>(
            () => _decode_WeekMaskWps
        );
    }
    return _cached_decoder_for_SequenceOfWeeks(el);
}


let _cached_encoder_for_SequenceOfWeeks: $.ASN1Encoder<SequenceOfWeeks> | null = null;


/**
 * @summary Encodes a(n) SequenceOfWeeks into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SequenceOfWeeks, encoded as an ASN.1 Element.
 */
export function _encode_SequenceOfWeeks(
    value: SequenceOfWeeks,
    elGetter: $.ASN1Encoder<SequenceOfWeeks>
): _Element {
    if (!_cached_encoder_for_SequenceOfWeeks) {
        _cached_encoder_for_SequenceOfWeeks = $._encodeSequenceOf<WeekMaskWps>(
            () => _encode_WeekMaskWps,
            $.BER
        );
    }
    return _cached_encoder_for_SequenceOfWeeks(value, elGetter);
}


/* eslint-enable */
