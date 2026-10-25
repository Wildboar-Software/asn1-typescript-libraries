/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InvokeId } from "../Facility-Information-Element-Components/InvokeId.ta.mjs";


/**
 * @summary Invoke_linkedId
 * @description
 * 
 * Parent invocation of a linked (child) operation. `present` is the parent's
 * invoke identifier and must identify an outstanding operation that has one or
 * more linked operations. `absent` carries NULL. If this field is present on an
 * invoke, the opcode must be in the parent operation's `&Linked` set.
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Invoke-linkedId ::= CHOICE {
 *   present  [0] IMPLICIT present < InvokeId,
 *   absent   [1] IMPLICIT NULL
 * }
 * ```
 */
export
type Invoke_linkedId =
    { present: $.Selection<InvokeId, "present"> } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Invoke_linkedId: $.ASN1Decoder<Invoke_linkedId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Invoke_linkedId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Invoke_linkedId (el: _Element): Invoke_linkedId {
    if (!_cached_decoder_for_Invoke_linkedId) { _cached_decoder_for_Invoke_linkedId = $._decode_inextensible_choice<Invoke_linkedId>({
    "CONTEXT 0": [ "present", $._decode_implicit<$.Selection<InvokeId, "present">>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "absent", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_Invoke_linkedId(el);
}

let _cached_encoder_for_Invoke_linkedId: $.ASN1Encoder<Invoke_linkedId> | null = null;

/**
 * @summary Encodes a(n) Invoke_linkedId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Invoke_linkedId, encoded as an ASN.1 Element.
 */
export
function _encode_Invoke_linkedId (value: Invoke_linkedId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Invoke_linkedId) { _cached_encoder_for_Invoke_linkedId = $._encode_choice<Invoke_linkedId>({
    "present": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "absent": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_Invoke_linkedId(value, elGetter);
}


/* eslint-enable */
