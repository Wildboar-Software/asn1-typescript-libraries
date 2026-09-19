/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NtdIndirectID, _decode_NtdIndirectID, _encode_NtdIndirectID } from "../AIN-Parameters/NtdIndirectID.ta.mjs";
// export { NtdIndirectID, _decode_NtdIndirectID, _encode_NtdIndirectID } from "../AIN-Parameters/NtdIndirectID.ta.mjs";


/**
 * @summary NtdID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NtdID  ::=  CHOICE{
 *         ntdIndirectID [1] NtdIndirectID
 *     }
 * ```
 */
export
type NtdID =
    { ntdIndirectID: NtdIndirectID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NtdID: $.ASN1Decoder<NtdID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NtdID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NtdID (el: _Element): NtdID {
    if (!_cached_decoder_for_NtdID) { _cached_decoder_for_NtdID = $._decode_inextensible_choice<NtdID>({
    "CONTEXT 1": [ "ntdIndirectID", $._decode_explicit<NtdIndirectID>(() => _decode_NtdIndirectID) ]
}); }
    return _cached_decoder_for_NtdID(el);
}

let _cached_encoder_for_NtdID: $.ASN1Encoder<NtdID> | null = null;

/**
 * @summary Encodes a(n) NtdID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NtdID, encoded as an ASN.1 Element.
 */
export
function _encode_NtdID (value: NtdID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NtdID) { _cached_encoder_for_NtdID = $._encode_choice<NtdID>({
    "ntdIndirectID": $._encode_explicit(_TagClass.context, 1, () => _encode_NtdIndirectID, $.BER),
}, $.BER); }
    return _cached_encoder_for_NtdID(value, elGetter);
}


/* eslint-enable */
