/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Set, _decode_Set, _encode_Set } from "../AIN-Parameters/Set.ta.mjs";
// export { Set, _decode_Set, _encode_Set } from "../AIN-Parameters/Set.ta.mjs";
import { Clear, _decode_Clear, _encode_Clear } from "../AIN-Parameters/Clear.ta.mjs";
// export { Clear, _enum_for_Clear, Clear_remove /* IMPORTED_LONG_ENUMERATION_ITEM */, remove /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Clear, _encode_Clear } from "../AIN-Parameters/Clear.ta.mjs";


/**
 * @summary ForwardingDn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardingDn  ::=  CHOICE{
 *         set Set,
 *         clear [3] IMPLICIT Clear
 *     }
 * ```
 */
export
type ForwardingDn =
    { set_: Set } /* CHOICE_ALT_ROOT */
    | { clear: Clear } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ForwardingDn: $.ASN1Decoder<ForwardingDn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardingDn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardingDn (el: _Element): ForwardingDn {
    if (!_cached_decoder_for_ForwardingDn) { _cached_decoder_for_ForwardingDn = $._decode_inextensible_choice<ForwardingDn>({
    "CONTEXT 1": [ "set_", _decode_Set ],
    "CONTEXT 4": [ "set_", _decode_Set ],
    "CONTEXT 3": [ "clear", $._decode_implicit<Clear>(() => _decode_Clear) ]
}); }
    return _cached_decoder_for_ForwardingDn(el);
}

let _cached_encoder_for_ForwardingDn: $.ASN1Encoder<ForwardingDn> | null = null;

/**
 * @summary Encodes a(n) ForwardingDn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardingDn, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardingDn (value: ForwardingDn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardingDn) { _cached_encoder_for_ForwardingDn = $._encode_choice<ForwardingDn>({
    "set_": _encode_Set,
    "clear": $._encode_implicit(_TagClass.context, 3, () => _encode_Clear, $.BER),
}, $.BER); }
    return _cached_encoder_for_ForwardingDn(value, elGetter);
}


/* eslint-enable */
