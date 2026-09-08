/* eslint-disable */
import {
    INTEGER,
    REAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CountInterval,
    _decode_CountInterval,
    _encode_CountInterval,
} from "../Q821-ASN1Module/CountInterval.ta.mjs";

import {
    CountWindow,
    _decode_CountWindow,
    _encode_CountWindow,
} from "../Q821-ASN1Module/CountWindow.ta.mjs";

import {
    ValueDuration,
    _decode_ValueDuration,
    _encode_ValueDuration,
} from "../Q821-ASN1Module/ValueDuration.ta.mjs";

import {
    GaugeParameters,
    _decode_GaugeParameters,
    _encode_GaugeParameters,
} from "../Q821-ASN1Module/GaugeParameters.ta.mjs";



/**
 * @summary Threshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Threshold  ::=  CHOICE {
 *   absoluteCount               [0]  INTEGER,
 *   countOverFixedTimeInterval  [1]  CountInterval,
 *   countOverSlidingWindow      [2]  CountWindow,
 *   valueAndDuration            [3]  ValueDuration,
 *   absoluteValue               [4]  REAL,
 *   gauge                       [5]  GaugeParameters
 * }
 * ```
 */
export
type Threshold =
    { absoluteCount: INTEGER } /* CHOICE_ALT_ROOT */
    | { countOverFixedTimeInterval: CountInterval } /* CHOICE_ALT_ROOT */
    | { countOverSlidingWindow: CountWindow } /* CHOICE_ALT_ROOT */
    | { valueAndDuration: ValueDuration } /* CHOICE_ALT_ROOT */
    | { absoluteValue: REAL } /* CHOICE_ALT_ROOT */
    | { gauge: GaugeParameters } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Threshold: $.ASN1Decoder<Threshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Threshold
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Threshold (el: _Element): Threshold {
    if (!_cached_decoder_for_Threshold) { _cached_decoder_for_Threshold = $._decode_inextensible_choice<Threshold>({
    "CONTEXT 0": [ "absoluteCount", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "countOverFixedTimeInterval", $._decode_implicit<CountInterval>(() => _decode_CountInterval) ],
    "CONTEXT 2": [ "countOverSlidingWindow", $._decode_implicit<CountWindow>(() => _decode_CountWindow) ],
    "CONTEXT 3": [ "valueAndDuration", $._decode_implicit<ValueDuration>(() => _decode_ValueDuration) ],
    "CONTEXT 4": [ "absoluteValue", $._decode_implicit<REAL>(() => $._decodeReal) ],
    "CONTEXT 5": [ "gauge", $._decode_explicit<GaugeParameters>(() => _decode_GaugeParameters) ]
}); }
    return _cached_decoder_for_Threshold(el);
}

let _cached_encoder_for_Threshold: $.ASN1Encoder<Threshold> | null = null;

/**
 * @summary Encodes a(n) Threshold into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Threshold, encoded as an ASN.1 Element.
 */
export
function _encode_Threshold (value: Threshold, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Threshold) { _cached_encoder_for_Threshold = $._encode_choice<Threshold>({
    "absoluteCount": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "countOverFixedTimeInterval": $._encode_implicit(_TagClass.context, 1, () => _encode_CountInterval, $.BER),
    "countOverSlidingWindow": $._encode_implicit(_TagClass.context, 2, () => _encode_CountWindow, $.BER),
    "valueAndDuration": $._encode_implicit(_TagClass.context, 3, () => _encode_ValueDuration, $.BER),
    "absoluteValue": $._encode_implicit(_TagClass.context, 4, () => $._encodeReal, $.BER),
    "gauge": $._encode_explicit(_TagClass.context, 5, () => _encode_GaugeParameters, $.BER),
}, $.BER); }
    return _cached_encoder_for_Threshold(value, elGetter);
}


/* eslint-enable */
