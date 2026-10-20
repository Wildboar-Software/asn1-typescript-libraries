/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvocationId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvocationId  ::=  CHOICE {present  INTEGER,
 *                          absent   NULL
 * }
 * ```
 */
export
type InvocationId =
    { present: INTEGER } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InvocationId: $.ASN1Decoder<InvocationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvocationId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvocationId (el: _Element): InvocationId {
    if (!_cached_decoder_for_InvocationId) { _cached_decoder_for_InvocationId = $._decode_inextensible_choice<InvocationId>({
    "CONTEXT 0": [ "present", $._decodeInteger ],
    "CONTEXT 1": [ "absent", $._decodeNull ]
}); }
    return _cached_decoder_for_InvocationId(el);
}

let _cached_encoder_for_InvocationId: $.ASN1Encoder<InvocationId> | null = null;

/**
 * @summary Encodes a(n) InvocationId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvocationId, encoded as an ASN.1 Element.
 */
export
function _encode_InvocationId (value: InvocationId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvocationId) { _cached_encoder_for_InvocationId = $._encode_choice<InvocationId>({
    "present": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "absent": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_InvocationId(value, elGetter);
}


/* eslint-enable */
