/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ActivationStateCode, _encode_ActivationStateCode, ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";


/**
 * @summary Action1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action1 ::=  CHOICE{
 *         activationStateCode [2] IMPLICIT ActivationStateCode--see Section 6.4.1 for encoding
 *     }
 * ```
 */
export
type Action1 =
    { activationStateCode: ActivationStateCode } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action1: $.ASN1Decoder<Action1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action1 (el: _Element): Action1 {
    if (!_cached_decoder_for_Action1) { _cached_decoder_for_Action1 = $._decode_inextensible_choice<Action1>({
    "CONTEXT 2": [ "activationStateCode", $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode) ]
}); }
    return _cached_decoder_for_Action1(el);
}

let _cached_encoder_for_Action1: $.ASN1Encoder<Action1> | null = null;

/**
 * @summary Encodes a(n) Action1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action1, encoded as an ASN.1 Element.
 */
export
function _encode_Action1 (value: Action1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action1) { _cached_encoder_for_Action1 = $._encode_choice<Action1>({
    "activationStateCode": $._encode_implicit(_TagClass.context, 2, () => _encode_ActivationStateCode, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action1(value, elGetter);
}


/* eslint-enable */
