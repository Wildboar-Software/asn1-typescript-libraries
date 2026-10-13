/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafTransferDataInvocation_privateAnnotation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafTransferDataInvocation-privateAnnotation ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RafTransferDataInvocation_privateAnnotation =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { notNull: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RafTransferDataInvocation_privateAnnotation: $.ASN1Decoder<RafTransferDataInvocation_privateAnnotation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafTransferDataInvocation_privateAnnotation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafTransferDataInvocation_privateAnnotation (el: _Element): RafTransferDataInvocation_privateAnnotation {
    if (!_cached_decoder_for_RafTransferDataInvocation_privateAnnotation) { _cached_decoder_for_RafTransferDataInvocation_privateAnnotation = $._decode_inextensible_choice<RafTransferDataInvocation_privateAnnotation>({
    "CONTEXT 0": [ "null_", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "notNull", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_RafTransferDataInvocation_privateAnnotation(el);
}

let _cached_encoder_for_RafTransferDataInvocation_privateAnnotation: $.ASN1Encoder<RafTransferDataInvocation_privateAnnotation> | null = null;

/**
 * @summary Encodes a(n) RafTransferDataInvocation_privateAnnotation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafTransferDataInvocation_privateAnnotation, encoded as an ASN.1 Element.
 */
export
function _encode_RafTransferDataInvocation_privateAnnotation (value: RafTransferDataInvocation_privateAnnotation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafTransferDataInvocation_privateAnnotation) { _cached_encoder_for_RafTransferDataInvocation_privateAnnotation = $._encode_choice<RafTransferDataInvocation_privateAnnotation>({
    "null_": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "notNull": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_RafTransferDataInvocation_privateAnnotation(value, elGetter);
}


/* eslint-enable */
