/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";
// export { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";


/**
 * @summary Action6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action6 ::=  CHOICE{
 *         delayInterval [2] IMPLICIT DelayInterval--See above for the encoding
 *     }
 * ```
 */
export
type Action6 =
    { delayInterval: DelayInterval } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action6: $.ASN1Decoder<Action6> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action6
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action6 (el: _Element): Action6 {
    if (!_cached_decoder_for_Action6) { _cached_decoder_for_Action6 = $._decode_inextensible_choice<Action6>({
    "CONTEXT 2": [ "delayInterval", $._decode_implicit<DelayInterval>(() => _decode_DelayInterval) ]
}); }
    return _cached_decoder_for_Action6(el);
}

let _cached_encoder_for_Action6: $.ASN1Encoder<Action6> | null = null;

/**
 * @summary Encodes a(n) Action6 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action6, encoded as an ASN.1 Element.
 */
export
function _encode_Action6 (value: Action6, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action6) { _cached_encoder_for_Action6 = $._encode_choice<Action6>({
    "delayInterval": $._encode_implicit(_TagClass.context, 2, () => _encode_DelayInterval, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action6(value, elGetter);
}


/* eslint-enable */
