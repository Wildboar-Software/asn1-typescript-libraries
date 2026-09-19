/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Toggle, _decode_Toggle, _encode_Toggle } from "../AIN-Parameters/Toggle.ta.mjs";
// export { Toggle, _enum_for_Toggle, Toggle_presentationStatusValue /* IMPORTED_LONG_ENUMERATION_ITEM */, presentationStatusValue /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Toggle, _encode_Toggle } from "../AIN-Parameters/Toggle.ta.mjs";


/**
 * @summary Action7
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action7 ::=  CHOICE{
 *         toggle [2] IMPLICIT Toggle
 *     }
 * ```
 */
export
type Action7 =
    { toggle: Toggle } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action7: $.ASN1Decoder<Action7> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action7
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action7 (el: _Element): Action7 {
    if (!_cached_decoder_for_Action7) { _cached_decoder_for_Action7 = $._decode_inextensible_choice<Action7>({
    "CONTEXT 2": [ "toggle", $._decode_implicit<Toggle>(() => _decode_Toggle) ]
}); }
    return _cached_decoder_for_Action7(el);
}

let _cached_encoder_for_Action7: $.ASN1Encoder<Action7> | null = null;

/**
 * @summary Encodes a(n) Action7 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action7, encoded as an ASN.1 Element.
 */
export
function _encode_Action7 (value: Action7, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action7) { _cached_encoder_for_Action7 = $._encode_choice<Action7>({
    "toggle": $._encode_implicit(_TagClass.context, 2, () => _encode_Toggle, $.BER),
}, $.BER); }
    return _cached_encoder_for_Action7(value, elGetter);
}


/* eslint-enable */
