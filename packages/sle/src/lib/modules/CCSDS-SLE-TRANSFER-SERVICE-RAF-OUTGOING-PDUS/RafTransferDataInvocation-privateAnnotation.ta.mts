/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type NULL,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RafTransferDataInvocation_privateAnnotation
 * @description
 * 
 * `null` means this frame has no private annotation. `notNull` is 1 to 128
 * octets. The book requires a prior management arrangement for any non-null
 * contents and does not define those contents (section 3.6.2.7 does not specify
 * an octet layout).
 * 
 * CCSDS 911.1-B-5, section 3.6.2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafTransferDataInvocation-privateAnnotation ::= CHOICE
 *     {   null                            [0] NULL
 *     ,   notNull                         [1] OCTET STRING (SIZE (1 .. 128))
 *     }
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
    const _decoded = _cached_decoder_for_RafTransferDataInvocation_privateAnnotation(el);
    if ("notNull" in _decoded) {
        if (_decoded.notNull.length < 1 || _decoded.notNull.length > 128) {
            throw new ASN1SizeError("RafTransferDataInvocation_privateAnnotation.notNull violates SIZE (1..128)");
        }
    }
    return _decoded;
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
