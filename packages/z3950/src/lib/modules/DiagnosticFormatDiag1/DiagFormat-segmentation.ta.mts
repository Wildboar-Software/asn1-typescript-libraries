/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_segmentation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-segmentation ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_segmentation =
    { segmentCount: NULL } /* CHOICE_ALT_ROOT */
    | { segmentSize: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_segmentation: $.ASN1Decoder<DiagFormat_segmentation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_segmentation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_segmentation (el: _Element): DiagFormat_segmentation {
    if (!_cached_decoder_for_DiagFormat_segmentation) { _cached_decoder_for_DiagFormat_segmentation = $._decode_inextensible_choice<DiagFormat_segmentation>({
    "CONTEXT 0": [ "segmentCount", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "segmentSize", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_DiagFormat_segmentation(el);
}

let _cached_encoder_for_DiagFormat_segmentation: $.ASN1Encoder<DiagFormat_segmentation> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_segmentation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_segmentation, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_segmentation (value: DiagFormat_segmentation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_segmentation) { _cached_encoder_for_DiagFormat_segmentation = $._encode_choice<DiagFormat_segmentation>({
    "segmentCount": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "segmentSize": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_segmentation(value, elGetter);
}


/* eslint-enable */
