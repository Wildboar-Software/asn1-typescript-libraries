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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary HandOffTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HandOffTime  ::=  CHOICE {null  NULL,
 *                         time  GeneralizedTime,
 *                         ...
 * }
 * ```
 */
export type HandOffTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_HandOffTime: $.ASN1Decoder<HandOffTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HandOffTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HandOffTime} The decoded data structure.
 */
export function _decode_HandOffTime(el: _Element) {
    if (!_cached_decoder_for_HandOffTime) {
        _cached_decoder_for_HandOffTime = $._decode_extensible_choice<HandOffTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_HandOffTime(el);
}


let _cached_encoder_for_HandOffTime: $.ASN1Encoder<HandOffTime> | null = null;


/**
 * @summary Encodes a(n) HandOffTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandOffTime, encoded as an ASN.1 Element.
 */
export function _encode_HandOffTime(
    value: HandOffTime,
    elGetter: $.ASN1Encoder<HandOffTime>
) {
    if (!_cached_encoder_for_HandOffTime) {
        _cached_encoder_for_HandOffTime = $._encode_choice<HandOffTime>(
            {
                null_: $._encodeNull,
                time: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_HandOffTime(value, elGetter);
}


/* eslint-enable */
