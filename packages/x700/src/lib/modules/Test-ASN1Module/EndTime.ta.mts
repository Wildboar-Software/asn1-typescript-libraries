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
import {
    Timespec,
    _decode_Timespec,
    _encode_Timespec,
} from '../Test-ASN1Module/Timespec.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EndTime */
/**
 * @summary EndTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndTime  ::=  CHOICE {
 *   specific   GeneralizedTime,
 *   relative   Timespec,
 *   continual  NULL
 * }
 * ```
 */
export type EndTime =
    | { specific: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { relative: Timespec } /* CHOICE_ALT_ROOT */
    | { continual: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */
let _cached_decoder_for_EndTime: $.ASN1Decoder<EndTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _decode_EndTime */
/**
 * @summary Decodes an ASN.1 element into a(n) EndTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EndTime} The decoded data structure.
 */
export function _decode_EndTime(el: _Element) {
    if (!_cached_decoder_for_EndTime) {
        _cached_decoder_for_EndTime = $._decode_inextensible_choice<EndTime>({
            'UNIVERSAL 24': ['specific', $._decodeGeneralizedTime],
            'CONTEXT 22': ['relative', _decode_Timespec],
            'CONTEXT 23': ['relative', _decode_Timespec],
            'CONTEXT 24': ['relative', _decode_Timespec],
            'CONTEXT 25': ['relative', _decode_Timespec],
            'CONTEXT 26': ['relative', _decode_Timespec],
            'CONTEXT 27': ['relative', _decode_Timespec],
            'CONTEXT 28': ['relative', _decode_Timespec],
            'UNIVERSAL 5': ['continual', $._decodeNull],
        });
    }
    return _cached_decoder_for_EndTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EndTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */
let _cached_encoder_for_EndTime: $.ASN1Encoder<EndTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndTime */

/* START_OF_SYMBOL_DEFINITION _encode_EndTime */
/**
 * @summary Encodes a(n) EndTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EndTime, encoded as an ASN.1 Element.
 */
export function _encode_EndTime(
    value: EndTime,
    elGetter: $.ASN1Encoder<EndTime>
) {
    if (!_cached_encoder_for_EndTime) {
        _cached_encoder_for_EndTime = $._encode_choice<EndTime>(
            {
                specific: $._encodeGeneralizedTime,
                relative: _encode_Timespec,
                continual: $._encodeNull,
            },
            $.BER
        );
    }
    return _cached_encoder_for_EndTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EndTime */

/* eslint-enable */
