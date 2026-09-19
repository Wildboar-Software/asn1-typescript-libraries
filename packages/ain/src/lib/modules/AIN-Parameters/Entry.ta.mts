/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";
// export { SpeedCallingCode, _decode_SpeedCallingCode, _encode_SpeedCallingCode } from "../AIN-Parameters/SpeedCallingCode.ta.mjs";
import { MemorySlot1, _decode_MemorySlot1, _encode_MemorySlot1 } from "../AIN-Parameters/MemorySlot1.ta.mjs";
// export { MemorySlot1, _enum_for_MemorySlot1, MemorySlot1_incoming /* IMPORTED_LONG_ENUMERATION_ITEM */, incoming /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MemorySlot1, _encode_MemorySlot1 } from "../AIN-Parameters/MemorySlot1.ta.mjs";


/**
 * @summary Entry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Entry  ::=  CHOICE{
 *         dn                  [1] IMPLICIT Dn,
 *         speedCallingCode    [2] IMPLICIT SpeedCallingCode,
 *         memorySlot          [3] IMPLICIT MemorySlot1
 *     }
 * ```
 */
export
type Entry =
    { dn: Dn } /* CHOICE_ALT_ROOT */
    | { speedCallingCode: SpeedCallingCode } /* CHOICE_ALT_ROOT */
    | { memorySlot: MemorySlot1 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Entry: $.ASN1Decoder<Entry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Entry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Entry (el: _Element): Entry {
    if (!_cached_decoder_for_Entry) { _cached_decoder_for_Entry = $._decode_inextensible_choice<Entry>({
    "CONTEXT 1": [ "dn", $._decode_implicit<Dn>(() => _decode_Dn) ],
    "CONTEXT 2": [ "speedCallingCode", $._decode_implicit<SpeedCallingCode>(() => _decode_SpeedCallingCode) ],
    "CONTEXT 3": [ "memorySlot", $._decode_implicit<MemorySlot1>(() => _decode_MemorySlot1) ]
}); }
    return _cached_decoder_for_Entry(el);
}

let _cached_encoder_for_Entry: $.ASN1Encoder<Entry> | null = null;

/**
 * @summary Encodes a(n) Entry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Entry, encoded as an ASN.1 Element.
 */
export
function _encode_Entry (value: Entry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Entry) { _cached_encoder_for_Entry = $._encode_choice<Entry>({
    "dn": $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER),
    "speedCallingCode": $._encode_implicit(_TagClass.context, 2, () => _encode_SpeedCallingCode, $.BER),
    "memorySlot": $._encode_implicit(_TagClass.context, 3, () => _encode_MemorySlot1, $.BER),
}, $.BER); }
    return _cached_encoder_for_Entry(value, elGetter);
}


/* eslint-enable */
