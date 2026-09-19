/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PINClientInPINS, _decode_PINClientInPINS, _encode_PINClientInPINS } from "../TS33128Payloads/PINClientInPINS.ta.mjs";
// export { PINClientInPINS, _decode_PINClientInPINS, _encode_PINClientInPINS } from "../TS33128Payloads/PINClientInPINS.ta.mjs";
import { PINClientsInPIN, _decode_PINClientsInPIN, _encode_PINClientsInPIN } from "../TS33128Payloads/PINClientsInPIN.ta.mjs";
// export { PINClientsInPIN, _decode_PINClientsInPIN, _encode_PINClientsInPIN } from "../TS33128Payloads/PINClientsInPIN.ta.mjs";


/**
 * @summary FiveGStartOfInterceptionWithPINClientInPIN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGStartOfInterceptionWithPINClientInPIN  ::=  CHOICE
 * {
 *     pINClientInPINS         [1] PINClientInPINS,
 *     pINClientsInPIN         [2] PINClientsInPIN
 * }
 * ```
 */
export
type FiveGStartOfInterceptionWithPINClientInPIN =
    { pINClientInPINS: PINClientInPINS } /* CHOICE_ALT_ROOT */
    | { pINClientsInPIN: PINClientsInPIN } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FiveGStartOfInterceptionWithPINClientInPIN: $.ASN1Decoder<FiveGStartOfInterceptionWithPINClientInPIN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGStartOfInterceptionWithPINClientInPIN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGStartOfInterceptionWithPINClientInPIN (el: _Element): FiveGStartOfInterceptionWithPINClientInPIN {
    if (!_cached_decoder_for_FiveGStartOfInterceptionWithPINClientInPIN) { _cached_decoder_for_FiveGStartOfInterceptionWithPINClientInPIN = $._decode_inextensible_choice<FiveGStartOfInterceptionWithPINClientInPIN>({
    "CONTEXT 1": [ "pINClientInPINS", $._decode_implicit<PINClientInPINS>(() => _decode_PINClientInPINS) ],
    "CONTEXT 2": [ "pINClientsInPIN", $._decode_implicit<PINClientsInPIN>(() => _decode_PINClientsInPIN) ]
}); }
    return _cached_decoder_for_FiveGStartOfInterceptionWithPINClientInPIN(el);
}

let _cached_encoder_for_FiveGStartOfInterceptionWithPINClientInPIN: $.ASN1Encoder<FiveGStartOfInterceptionWithPINClientInPIN> | null = null;

/**
 * @summary Encodes a(n) FiveGStartOfInterceptionWithPINClientInPIN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGStartOfInterceptionWithPINClientInPIN, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGStartOfInterceptionWithPINClientInPIN (value: FiveGStartOfInterceptionWithPINClientInPIN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGStartOfInterceptionWithPINClientInPIN) { _cached_encoder_for_FiveGStartOfInterceptionWithPINClientInPIN = $._encode_choice<FiveGStartOfInterceptionWithPINClientInPIN>({
    "pINClientInPINS": $._encode_implicit(_TagClass.context, 1, () => _encode_PINClientInPINS, $.BER),
    "pINClientsInPIN": $._encode_implicit(_TagClass.context, 2, () => _encode_PINClientsInPIN, $.BER),
}, $.BER); }
    return _cached_encoder_for_FiveGStartOfInterceptionWithPINClientInPIN(value, elGetter);
}


/* eslint-enable */
