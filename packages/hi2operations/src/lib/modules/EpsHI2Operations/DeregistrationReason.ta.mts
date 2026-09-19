/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeregistrationReason
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeregistrationReason  ::=  CHOICE
 * {
 *  reason-CodeAVP [1] INTEGER,
 *  server-AssignmentType [2] INTEGER,
 *  -- Coded according to 3GPP TS 29.229 [96]
 *  ...
 * }
 * ```
 */
export
type DeregistrationReason =
    { reason_CodeAVP: INTEGER } /* CHOICE_ALT_ROOT */
    | { server_AssignmentType: INTEGER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DeregistrationReason: $.ASN1Decoder<DeregistrationReason> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeregistrationReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeregistrationReason (el: _Element): DeregistrationReason {
    if (!_cached_decoder_for_DeregistrationReason) { _cached_decoder_for_DeregistrationReason = $._decode_extensible_choice<DeregistrationReason>({
    "CONTEXT 1": [ "reason_CodeAVP", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "server_AssignmentType", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_DeregistrationReason(el);
}

let _cached_encoder_for_DeregistrationReason: $.ASN1Encoder<DeregistrationReason> | null = null;

/**
 * @summary Encodes a(n) DeregistrationReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeregistrationReason, encoded as an ASN.1 Element.
 */
export
function _encode_DeregistrationReason (value: DeregistrationReason, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeregistrationReason) { _cached_encoder_for_DeregistrationReason = $._encode_choice<DeregistrationReason>({
    "reason_CodeAVP": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "server_AssignmentType": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeregistrationReason(value, elGetter);
}


/* eslint-enable */
