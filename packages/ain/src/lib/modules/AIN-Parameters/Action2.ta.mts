/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ActivationStateCode, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
import { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";
// export { DelayInterval, _decode_DelayInterval, _encode_DelayInterval } from "../AIN-Parameters/DelayInterval.ta.mjs";


/**
 * @summary Action2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action2 ::=  CHOICE{
 *         activationStateCode [2] IMPLICIT ActivationStateCode,
 *         delayInterval [3] IMPLICIT DelayInterval
 *     }
 * ```
 */
export
type Action2 =
    { activationStateCode: ActivationStateCode } /* CHOICE_ALT_ROOT */
    | { delayInterval: DelayInterval } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action2: $.ASN1Decoder<Action2> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action2
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action2 (el: _Element): Action2 {
    if (!_cached_decoder_for_Action2) { _cached_decoder_for_Action2 = $._decode_inextensible_choice<Action2>({
    "CONTEXT 2": [ "activationStateCode", $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode) ],
    "CONTEXT 3": [ "delayInterval", $._decode_implicit<DelayInterval>(() => _decode_DelayInterval) ]
}); }
    return _cached_decoder_for_Action2(el);
}

let _cached_encoder_for_Action2: $.ASN1Encoder<Action2> | null = null;

/**
 * @summary Encodes a(n) Action2 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action2, encoded as an ASN.1 Element.
 */
export
function _encode_Action2 (value: Action2, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action2) { _cached_encoder_for_Action2 = $._encode_choice<Action2>({
    "activationStateCode": $._encode_implicit(_TagClass.context, 2, () => _encode_ActivationStateCode, $.BER),
    "delayInterval": $._encode_implicit(_TagClass.context, 3, () => _encode_DelayInterval, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action2(value, elGetter);
}


/* eslint-enable */
