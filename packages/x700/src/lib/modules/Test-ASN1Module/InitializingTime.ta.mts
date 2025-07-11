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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/**
 * @summary InitializingTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InitializingTime  ::=  CHOICE {
 *   actualTime    GeneralizedTime,
 *   relativeTime  Timespec
 * }
 * ```
 */
export type InitializingTime =
    | { actualTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { relativeTime: Timespec } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InitializingTime: $.ASN1Decoder<InitializingTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitializingTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InitializingTime} The decoded data structure.
 */
export function _decode_InitializingTime(el: _Element): InitializingTime {
    if (!_cached_decoder_for_InitializingTime) {
        _cached_decoder_for_InitializingTime = $._decode_inextensible_choice<InitializingTime>(
            {
                'UNIVERSAL 24': ['actualTime', $._decodeGeneralizedTime],
                'CONTEXT 22': ['relativeTime', _decode_Timespec],
                'CONTEXT 23': ['relativeTime', _decode_Timespec],
                'CONTEXT 24': ['relativeTime', _decode_Timespec],
                'CONTEXT 25': ['relativeTime', _decode_Timespec],
                'CONTEXT 26': ['relativeTime', _decode_Timespec],
                'CONTEXT 27': ['relativeTime', _decode_Timespec],
                'CONTEXT 28': ['relativeTime', _decode_Timespec],
            }
        );
    }
    return _cached_decoder_for_InitializingTime(el);
}

let _cached_encoder_for_InitializingTime: $.ASN1Encoder<InitializingTime> | null = null;

/**
 * @summary Encodes a(n) InitializingTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitializingTime, encoded as an ASN.1 Element.
 */
export function _encode_InitializingTime(
    value: InitializingTime,
    elGetter: $.ASN1Encoder<InitializingTime>
): _Element {
    if (!_cached_encoder_for_InitializingTime) {
        _cached_encoder_for_InitializingTime = $._encode_choice<InitializingTime>(
            {
                actualTime: $._encodeGeneralizedTime,
                relativeTime: _encode_Timespec,
            },
            $.BER
        );
    }
    return _cached_encoder_for_InitializingTime(value, elGetter);
}


/* eslint-enable */
