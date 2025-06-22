/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime, UTCTime } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {
 *   utcTime          UTCTime,
 *   generalizedTime  GeneralizedTime,
 *   ... }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Time: $.ASN1Decoder<Time> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export function _decode_Time(el: _Element) {
    if (!_cached_decoder_for_Time) {
        _cached_decoder_for_Time = $._decode_extensible_choice<Time>({
            "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
            "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
        });
    }
    return _cached_decoder_for_Time(el);
}

let _cached_encoder_for_Time: $.ASN1Encoder<Time> | null = null;

/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export function _encode_Time(value: Time, elGetter: $.ASN1Encoder<Time>) {
    if (!_cached_encoder_for_Time) {
        _cached_encoder_for_Time = $._encode_choice<Time>(
            {
                utcTime: $._encodeUTCTime,
                generalizedTime: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_Time(value, elGetter);
}


/* eslint-enable */
