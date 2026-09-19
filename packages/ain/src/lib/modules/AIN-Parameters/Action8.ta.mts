/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_Invoke8, _encode_Invoke8, Invoke8 } from "../AIN-Parameters/Invoke8.ta.mjs";
// export { Invoke8, _enum_for_Invoke8, Invoke8_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Invoke8, _encode_Invoke8 } from "../AIN-Parameters/Invoke8.ta.mjs";


/**
 * @summary Action8
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action8 ::=  CHOICE{
 *         invoke [2] IMPLICIT Invoke8
 *     }
 * ```
 */
export
type Action8 =
    { invoke: Invoke8 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action8: $.ASN1Decoder<Action8> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action8
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action8 (el: _Element): Action8 {
    if (!_cached_decoder_for_Action8) { _cached_decoder_for_Action8 = $._decode_inextensible_choice<Action8>({
    "CONTEXT 2": [ "invoke", $._decode_implicit<Invoke8>(() => _decode_Invoke8) ]
}); }
    return _cached_decoder_for_Action8(el);
}

let _cached_encoder_for_Action8: $.ASN1Encoder<Action8> | null = null;

/**
 * @summary Encodes a(n) Action8 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action8, encoded as an ASN.1 Element.
 */
export
function _encode_Action8 (value: Action8, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action8) { _cached_encoder_for_Action8 = $._encode_choice<Action8>({
    "invoke": $._encode_implicit(_TagClass.context, 2, () => _encode_Invoke8, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action8(value, elGetter);
}


/* eslint-enable */
