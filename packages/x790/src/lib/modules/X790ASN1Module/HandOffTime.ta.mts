/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



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
export
type HandOffTime =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_HandOffTime: $.ASN1Decoder<HandOffTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandOffTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandOffTime (el: _Element): HandOffTime {
    if (!_cached_decoder_for_HandOffTime) { _cached_decoder_for_HandOffTime = $._decode_extensible_choice<HandOffTime>({
    "UNIVERSAL 5": [ "null_", $._decodeNull ],
    "UNIVERSAL 24": [ "time", $._decodeGeneralizedTime ]
}); }
    return _cached_decoder_for_HandOffTime(el);
}

let _cached_encoder_for_HandOffTime: $.ASN1Encoder<HandOffTime> | null = null;

/**
 * @summary Encodes a(n) HandOffTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandOffTime, encoded as an ASN.1 Element.
 */
export
function _encode_HandOffTime (value: HandOffTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandOffTime) { _cached_encoder_for_HandOffTime = $._encode_choice<HandOffTime>({
    "null_": $._encodeNull,
    "time": $._encodeGeneralizedTime,
}, $.BER); }
    return _cached_encoder_for_HandOffTime(value, elGetter);
}


/* eslint-enable */
