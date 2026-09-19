/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChangeList, _decode_ChangeList, _encode_ChangeList } from "../AIN-Parameters/ChangeList.ta.mjs";
// export { ChangeList, _decode_ChangeList, _encode_ChangeList } from "../AIN-Parameters/ChangeList.ta.mjs";


/**
 * @summary Action9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action9 ::=  CHOICE{
 *         changeList [2] IMPLICIT ChangeList
 *     }
 * ```
 */
export
type Action9 =
    { changeList: ChangeList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action9: $.ASN1Decoder<Action9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action9 (el: _Element): Action9 {
    if (!_cached_decoder_for_Action9) { _cached_decoder_for_Action9 = $._decode_inextensible_choice<Action9>({
    "CONTEXT 2": [ "changeList", $._decode_implicit<ChangeList>(() => _decode_ChangeList) ]
}); }
    return _cached_decoder_for_Action9(el);
}

let _cached_encoder_for_Action9: $.ASN1Encoder<Action9> | null = null;

/**
 * @summary Encodes a(n) Action9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action9, encoded as an ASN.1 Element.
 */
export
function _encode_Action9 (value: Action9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action9) { _cached_encoder_for_Action9 = $._encode_choice<Action9>({
    "changeList": $._encode_implicit(_TagClass.context, 2, () => _encode_ChangeList, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action9(value, elGetter);
}


/* eslint-enable */
