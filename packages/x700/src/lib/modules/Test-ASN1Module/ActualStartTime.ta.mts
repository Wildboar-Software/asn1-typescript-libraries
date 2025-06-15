/* eslint-disable */
import {
    NULL,
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

/**
 * @summary ActualStartTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActualStartTime  ::=  CHOICE {unknown      NULL,
 *                             actualStart  GeneralizedTime
 * }
 * ```
 */
export type ActualStartTime =
    | { unknown: NULL } /* CHOICE_ALT_ROOT */
    | { actualStart: GeneralizedTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ActualStartTime: $.ASN1Decoder<ActualStartTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActualStartTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActualStartTime} The decoded data structure.
 */
export function _decode_ActualStartTime(el: _Element) {
    if (!_cached_decoder_for_ActualStartTime) {
        _cached_decoder_for_ActualStartTime = $._decode_inextensible_choice<ActualStartTime>(
            {
                'UNIVERSAL 5': ['unknown', $._decodeNull],
                'UNIVERSAL 24': ['actualStart', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_ActualStartTime(el);
}

let _cached_encoder_for_ActualStartTime: $.ASN1Encoder<ActualStartTime> | null = null;

/**
 * @summary Encodes a(n) ActualStartTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualStartTime, encoded as an ASN.1 Element.
 */
export function _encode_ActualStartTime(
    value: ActualStartTime,
    elGetter: $.ASN1Encoder<ActualStartTime>
) {
    if (!_cached_encoder_for_ActualStartTime) {
        _cached_encoder_for_ActualStartTime = $._encode_choice<ActualStartTime>(
            {
                unknown: $._encodeNull,
                actualStart: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActualStartTime(value, elGetter);
}


/* eslint-enable */
