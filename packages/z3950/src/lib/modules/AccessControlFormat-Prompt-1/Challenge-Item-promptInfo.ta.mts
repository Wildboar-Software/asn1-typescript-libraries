/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Encryption, _decode_Encryption, _encode_Encryption } from "../AccessControlFormat-Prompt-1/Encryption.ta.mjs";
// export { Encryption, _decode_Encryption, _encode_Encryption } from "../AccessControlFormat-Prompt-1/Encryption.ta.mjs";


/**
 * @summary Challenge_Item_promptInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Challenge-Item-promptInfo ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type Challenge_Item_promptInfo =
    { character: InternationalString } /* CHOICE_ALT_ROOT */
    | { encrypted: Encryption } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Challenge_Item_promptInfo: $.ASN1Decoder<Challenge_Item_promptInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Challenge_Item_promptInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Challenge_Item_promptInfo (el: _Element): Challenge_Item_promptInfo {
    if (!_cached_decoder_for_Challenge_Item_promptInfo) { _cached_decoder_for_Challenge_Item_promptInfo = $._decode_inextensible_choice<Challenge_Item_promptInfo>({
    "CONTEXT 1": [ "character", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 2": [ "encrypted", $._decode_implicit<Encryption>(() => _decode_Encryption) ]
}); }
    return _cached_decoder_for_Challenge_Item_promptInfo(el);
}

let _cached_encoder_for_Challenge_Item_promptInfo: $.ASN1Encoder<Challenge_Item_promptInfo> | null = null;

/**
 * @summary Encodes a(n) Challenge_Item_promptInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Challenge_Item_promptInfo, encoded as an ASN.1 Element.
 */
export
function _encode_Challenge_Item_promptInfo (value: Challenge_Item_promptInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Challenge_Item_promptInfo) { _cached_encoder_for_Challenge_Item_promptInfo = $._encode_choice<Challenge_Item_promptInfo>({
    "character": $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER),
    "encrypted": $._encode_implicit(_TagClass.context, 2, () => _encode_Encryption, $.BER),
}, $.BER); }
    return _cached_encoder_for_Challenge_Item_promptInfo(value, elGetter);
}


/* eslint-enable */
