/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NationalGapInterval, _decode_NationalGapInterval, _encode_NationalGapInterval } from "../AIN-Parameters/NationalGapInterval.ta.mjs";
// export { NationalGapInterval, _decode_NationalGapInterval, _encode_NationalGapInterval } from "../AIN-Parameters/NationalGapInterval.ta.mjs";
import { PrivateGapInterval, _decode_PrivateGapInterval, _encode_PrivateGapInterval } from "../AIN-Parameters/PrivateGapInterval.ta.mjs";
// export { PrivateGapInterval, _decode_PrivateGapInterval, _encode_PrivateGapInterval } from "../AIN-Parameters/PrivateGapInterval.ta.mjs";


/**
 * @summary GapInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GapInterval  ::=  CHOICE{
 *         nationalGapInterval NationalGapInterval,
 *         privateGapInterval PrivateGapInterval
 *     }
 * ```
 */
export
type GapInterval =
    { nationalGapInterval: NationalGapInterval } /* CHOICE_ALT_ROOT */
    | { privateGapInterval: PrivateGapInterval } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GapInterval: $.ASN1Decoder<GapInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GapInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GapInterval (el: _Element): GapInterval {
    if (!_cached_decoder_for_GapInterval) { _cached_decoder_for_GapInterval = $._decode_inextensible_choice<GapInterval>({
    "CONTEXT 63": [ "nationalGapInterval", _decode_NationalGapInterval ],
    "CONTEXT 64": [ "privateGapInterval", _decode_PrivateGapInterval ]
}); }
    return _cached_decoder_for_GapInterval(el);
}

let _cached_encoder_for_GapInterval: $.ASN1Encoder<GapInterval> | null = null;

/**
 * @summary Encodes a(n) GapInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GapInterval, encoded as an ASN.1 Element.
 */
export
function _encode_GapInterval (value: GapInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GapInterval) { _cached_encoder_for_GapInterval = $._encode_choice<GapInterval>({
    "nationalGapInterval": _encode_NationalGapInterval,
    "privateGapInterval": _encode_PrivateGapInterval,
}, $.BER); }
    return _cached_encoder_for_GapInterval(value, elGetter);
}


/* eslint-enable */
