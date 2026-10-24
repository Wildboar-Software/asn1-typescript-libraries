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
 * @summary RcfTransferDataInvocation_privateAnnotation
 * @description
 *
 * Private annotation on one delivered frame. null_ means the provider has no
 * private annotation for this frame. notNull carries the agreed annotation.
 * Section 3.6.2.6 requires a prior management arrangement for any non-null
 * contents and does not define those contents.
 *
 * CCSDS 911.2-B-4, section 3.6.2.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfTransferDataInvocation-privateAnnotation ::= CHOICE
 *     {   null                            [0] NULL
 *     ,   notNull                         [1] OCTET STRING (SIZE (1 .. 128))
 *     }
 * ```
 */
export
type RcfTransferDataInvocation_privateAnnotation =
    { null_: NULL } /* CHOICE_ALT_ROOT */
    | { notNull: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RcfTransferDataInvocation_privateAnnotation: $.ASN1Decoder<RcfTransferDataInvocation_privateAnnotation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfTransferDataInvocation_privateAnnotation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfTransferDataInvocation_privateAnnotation (el: _Element): RcfTransferDataInvocation_privateAnnotation {
    if (!_cached_decoder_for_RcfTransferDataInvocation_privateAnnotation) { _cached_decoder_for_RcfTransferDataInvocation_privateAnnotation = $._decode_inextensible_choice<RcfTransferDataInvocation_privateAnnotation>({
    "CONTEXT 0": [ "null_", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "notNull", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    const _decoded = _cached_decoder_for_RcfTransferDataInvocation_privateAnnotation(el);
    if ("notNull" in _decoded) {
        if (_decoded.notNull.length < 1 || _decoded.notNull.length > 128) {
            throw new ASN1SizeError("RcfTransferDataInvocation_privateAnnotation.notNull violates SIZE (1..128)");
        }
    }
    return _decoded;
}

let _cached_encoder_for_RcfTransferDataInvocation_privateAnnotation: $.ASN1Encoder<RcfTransferDataInvocation_privateAnnotation> | null = null;

/**
 * @summary Encodes a(n) RcfTransferDataInvocation_privateAnnotation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfTransferDataInvocation_privateAnnotation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfTransferDataInvocation_privateAnnotation (value: RcfTransferDataInvocation_privateAnnotation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfTransferDataInvocation_privateAnnotation) { _cached_encoder_for_RcfTransferDataInvocation_privateAnnotation = $._encode_choice<RcfTransferDataInvocation_privateAnnotation>({
    "null_": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "notNull": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_RcfTransferDataInvocation_privateAnnotation(value, elGetter);
}


/* eslint-enable */
