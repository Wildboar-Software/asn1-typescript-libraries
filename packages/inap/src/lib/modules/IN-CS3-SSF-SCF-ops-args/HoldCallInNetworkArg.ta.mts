/* eslint-disable */
import {
    type NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type HoldCause, _decode_HoldCause, _encode_HoldCause } from "../IN-CS3-SSF-SCF-datatypes/HoldCause.ta.mjs";
// export { HoldCause, _decode_HoldCause, _encode_HoldCause } from "../IN-CS3-SSF-SCF-datatypes/HoldCause.ta.mjs";


/**
 * @summary HoldCallInNetworkArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCallInNetworkArg  ::=  CHOICE {
 *   holdcause  [0]  HoldCause,
 *   empty      [1]  NULL
 * }
 * ```
 */
export
type HoldCallInNetworkArg =
    { holdcause: HoldCause } /* CHOICE_ALT_ROOT */
    | { empty: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HoldCallInNetworkArg: $.ASN1Decoder<HoldCallInNetworkArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCallInNetworkArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCallInNetworkArg (el: _Element): HoldCallInNetworkArg {
    if (!_cached_decoder_for_HoldCallInNetworkArg) { _cached_decoder_for_HoldCallInNetworkArg = $._decode_inextensible_choice<HoldCallInNetworkArg>({
    "CONTEXT 0": [ "holdcause", $._decode_implicit<HoldCause>(() => _decode_HoldCause) ],
    "CONTEXT 1": [ "empty", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_HoldCallInNetworkArg(el);
}

let _cached_encoder_for_HoldCallInNetworkArg: $.ASN1Encoder<HoldCallInNetworkArg> | null = null;

/**
 * @summary Encodes a(n) HoldCallInNetworkArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCallInNetworkArg, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCallInNetworkArg (value: HoldCallInNetworkArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCallInNetworkArg) { _cached_encoder_for_HoldCallInNetworkArg = $._encode_choice<HoldCallInNetworkArg>({
    "holdcause": $._encode_implicit(_TagClass.context, 0, () => _encode_HoldCause, $.BER),
    "empty": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_HoldCallInNetworkArg(value, elGetter);
}


/* eslint-enable */
