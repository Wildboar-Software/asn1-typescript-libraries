/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ErrorReason, _encode_ErrorReason, ErrorReason } from "../IEC61850/ErrorReason.ta.mjs";
// export { ErrorReason, ErrorReason_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_notFound /* IMPORTED_LONG_NAMED_INTEGER */, notFound /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ErrorReason, _encode_ErrorReason } from "../IEC61850/ErrorReason.ta.mjs";


/**
 * @summary RequestResults
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestResults ::=  CHOICE {
 *     offset        [0] IMPLICIT INTEGER,
 *     reference    [1] IMPLICIT IA5String,
 *     error        [2] IMPLICIT ErrorReason
 * }
 * ```
 */
export
type RequestResults =
    { offset: INTEGER } /* CHOICE_ALT_ROOT */
    | { reference: IA5String } /* CHOICE_ALT_ROOT */
    | { error: ErrorReason } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestResults: $.ASN1Decoder<RequestResults> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestResults
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestResults (el: _Element): RequestResults {
    if (!_cached_decoder_for_RequestResults) { _cached_decoder_for_RequestResults = $._decode_inextensible_choice<RequestResults>({
    "CONTEXT 0": [ "offset", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "reference", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 2": [ "error", $._decode_implicit<ErrorReason>(() => _decode_ErrorReason) ]
}); }
    return _cached_decoder_for_RequestResults(el);
}

let _cached_encoder_for_RequestResults: $.ASN1Encoder<RequestResults> | null = null;

/**
 * @summary Encodes a(n) RequestResults into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestResults, encoded as an ASN.1 Element.
 */
export
function _encode_RequestResults (value: RequestResults, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestResults) { _cached_encoder_for_RequestResults = $._encode_choice<RequestResults>({
    "offset": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "reference": $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER),
    "error": $._encode_implicit(_TagClass.context, 2, () => _encode_ErrorReason, $.BER),
}, $.BER); }
    return _cached_encoder_for_RequestResults(value, elGetter);
}


/* eslint-enable */
