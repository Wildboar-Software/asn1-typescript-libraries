/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER,
    type NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvokeId
 * @description
 * 
 * Identifier of one operation invocation, reflected in the return result,
 * return error, or reject. `present` is the integer. For the generic functional
 * protocol that integer is restricted to -32768..32767 (`GFPInvokeIDSet`).
 * `absent` is used when a reject cannot name an invocation (`noInvokeId`).
 *
 * Significance is limited to the call reference of the message, including the
 * dummy call reference.
 *
 * ITU-T Rec. Q.932 (05/1998) §6.1.4 and §8.2.3.1.2; ITU-T Rec. Q.932 (1998)
 * Amd.1 (06/2000) Table 8-7 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeId  ::=  CHOICE {present  INTEGER,
 *                      absent   NULL
 * }
 * ```
 */
export
type InvokeId =
    { present: INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvokeId (el: _Element): InvokeId {
    if (!_cached_decoder_for_InvokeId) { _cached_decoder_for_InvokeId = $._decode_inextensible_choice<InvokeId>({
    "UNIVERSAL 2": [ "present", $._decodeInteger ],
    "UNIVERSAL 5": [ "absent", $._decodeNull ]
}); }
    return _cached_decoder_for_InvokeId(el);
}

let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;

/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export
function _encode_InvokeId (value: InvokeId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvokeId) { _cached_encoder_for_InvokeId = $._encode_choice<InvokeId>({
    "present": $._encodeInteger,
    "absent": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_InvokeId(value, elGetter);
}


/* eslint-enable */
