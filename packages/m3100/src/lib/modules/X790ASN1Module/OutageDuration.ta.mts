/* eslint-disable */
import {
    NULL,
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
} from '../X790ASN1Module/TimeInterval.ta.mjs';

/**
 * @summary OutageDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OutageDuration  ::=  CHOICE {null  NULL,
 *                            time  TimeInterval,
 *                            ...
 * }
 * ```
 */
export type OutageDuration =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: TimeInterval } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_OutageDuration: $.ASN1Decoder<OutageDuration> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) OutageDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OutageDuration} The decoded data structure.
 */
export function _decode_OutageDuration(el: _Element): OutageDuration {
    if (!_cached_decoder_for_OutageDuration) {
        _cached_decoder_for_OutageDuration = $._decode_extensible_choice<OutageDuration>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 16': ['time', _decode_TimeInterval],
            }
        );
    }
    return _cached_decoder_for_OutageDuration(el);
}


let _cached_encoder_for_OutageDuration: $.ASN1Encoder<OutageDuration> | null = null;


/**
 * @summary Encodes a(n) OutageDuration into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OutageDuration, encoded as an ASN.1 Element.
 */
export function _encode_OutageDuration(
    value: OutageDuration,
    elGetter: $.ASN1Encoder<OutageDuration>
): _Element {
    if (!_cached_encoder_for_OutageDuration) {
        _cached_encoder_for_OutageDuration = $._encode_choice<OutageDuration>(
            {
                null_: $._encodeNull,
                time: _encode_TimeInterval,
            },
            $.BER
        );
    }
    return _cached_encoder_for_OutageDuration(value, elGetter);
}


/* eslint-enable */
