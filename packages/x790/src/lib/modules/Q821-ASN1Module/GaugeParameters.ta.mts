/* eslint-disable */
import {
    SEQUENCE,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GaugeParameters_up,
    _decode_GaugeParameters_up,
    _encode_GaugeParameters_up,
} from "../Q821-ASN1Module/GaugeParameters-up.ta.mjs";

import {
    GaugeParameters_down,
    _decode_GaugeParameters_down,
    _encode_GaugeParameters_down,
} from "../Q821-ASN1Module/GaugeParameters-down.ta.mjs";



/**
 * @summary GaugeParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GaugeParameters  ::=  CHOICE {
 *   up    [1]  SEQUENCE {high  ObservedValue,
 *                        low   ObservedValue},
 *   down  [2]  SEQUENCE {high  ObservedValue,
 *                        low   ObservedValue}
 * }
 * ```
 */
export
type GaugeParameters =
    { up: GaugeParameters_up } /* CHOICE_ALT_ROOT */
    | { down: GaugeParameters_down } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GaugeParameters: $.ASN1Decoder<GaugeParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GaugeParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GaugeParameters (el: _Element): GaugeParameters {
    if (!_cached_decoder_for_GaugeParameters) { _cached_decoder_for_GaugeParameters = $._decode_inextensible_choice<GaugeParameters>({
    "CONTEXT 1": [ "up", $._decode_implicit<GaugeParameters_up>(() => _decode_GaugeParameters_up) ],
    "CONTEXT 2": [ "down", $._decode_implicit<GaugeParameters_down>(() => _decode_GaugeParameters_down) ]
}); }
    return _cached_decoder_for_GaugeParameters(el);
}

let _cached_encoder_for_GaugeParameters: $.ASN1Encoder<GaugeParameters> | null = null;

/**
 * @summary Encodes a(n) GaugeParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GaugeParameters, encoded as an ASN.1 Element.
 */
export
function _encode_GaugeParameters (value: GaugeParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GaugeParameters) { _cached_encoder_for_GaugeParameters = $._encode_choice<GaugeParameters>({
    "up": $._encode_implicit(_TagClass.context, 1, () => _encode_GaugeParameters_up, $.BER),
    "down": $._encode_implicit(_TagClass.context, 2, () => _encode_GaugeParameters_down, $.BER),
}, $.BER); }
    return _cached_encoder_for_GaugeParameters(value, elGetter);
}


/* eslint-enable */
