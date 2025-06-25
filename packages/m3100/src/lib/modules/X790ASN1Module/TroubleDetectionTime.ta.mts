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
 * @summary TroubleDetectionTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleDetectionTime  ::=  CHOICE {null  NULL,
 *                                  time  GeneralizedTime,
 *                                  ...
 * }
 * ```
 */
export type TroubleDetectionTime =
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


let _cached_decoder_for_TroubleDetectionTime: $.ASN1Decoder<TroubleDetectionTime> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TroubleDetectionTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleDetectionTime} The decoded data structure.
 */
export function _decode_TroubleDetectionTime(el: _Element): TroubleDetectionTime {
    if (!_cached_decoder_for_TroubleDetectionTime) {
        _cached_decoder_for_TroubleDetectionTime = $._decode_extensible_choice<TroubleDetectionTime>(
            {
                'UNIVERSAL 5': ['null_', $._decodeNull],
                'UNIVERSAL 24': ['time', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_TroubleDetectionTime(el);
}


let _cached_encoder_for_TroubleDetectionTime: $.ASN1Encoder<TroubleDetectionTime> | null = null;


/**
 * @summary Encodes a(n) TroubleDetectionTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleDetectionTime, encoded as an ASN.1 Element.
 */
export function _encode_TroubleDetectionTime(
    value: TroubleDetectionTime,
    elGetter: $.ASN1Encoder<TroubleDetectionTime>
): _Element {
    if (!_cached_encoder_for_TroubleDetectionTime) {
        _cached_encoder_for_TroubleDetectionTime = $._encode_choice<TroubleDetectionTime>(
            {
                null_: $._encodeNull,
                time: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_TroubleDetectionTime(value, elGetter);
}


/* eslint-enable */
