/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PositiveNegative_responsePositive, _decode_PositiveNegative_responsePositive, _encode_PositiveNegative_responsePositive } from "../IEC61850/PositiveNegative-responsePositive.ta.mjs";
// export { PositiveNegative_responsePositive, _decode_PositiveNegative_responsePositive, _encode_PositiveNegative_responsePositive } from "../IEC61850/PositiveNegative-responsePositive.ta.mjs";
import { GlbErrors, _decode_GlbErrors, _encode_GlbErrors } from "../IEC61850/GlbErrors.ta.mjs";
// export { GlbErrors, GlbErrors_other /* IMPORTED_LONG_NAMED_INTEGER */, other /* IMPORTED_SHORT_NAMED_INTEGER */, GlbErrors_unknownControlBlock /* IMPORTED_LONG_NAMED_INTEGER */, unknownControlBlock /* IMPORTED_SHORT_NAMED_INTEGER */, GlbErrors_responseTooLarge /* IMPORTED_LONG_NAMED_INTEGER */, responseTooLarge /* IMPORTED_SHORT_NAMED_INTEGER */, GlbErrors_controlBlockConfigurationError /* IMPORTED_LONG_NAMED_INTEGER */, controlBlockConfigurationError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GlbErrors, _encode_GlbErrors } from "../IEC61850/GlbErrors.ta.mjs";


/**
 * @summary PositiveNegative
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PositiveNegative  ::=  CHOICE {
 *     responsePositive    [2] IMPLICIT SEQUENCE {
 *         datSet                [0] IMPLICIT VisibleString OPTIONAL,
 *         result                [1] IMPLICIT SEQUENCE OF RequestResults
 *     },
 *     responseNegative    [3] IMPLICIT GlbErrors
 * }
 * ```
 */
export
type PositiveNegative =
    { responsePositive: PositiveNegative_responsePositive } /* CHOICE_ALT_ROOT */
    | { responseNegative: GlbErrors } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PositiveNegative: $.ASN1Decoder<PositiveNegative> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PositiveNegative
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PositiveNegative (el: _Element): PositiveNegative {
    if (!_cached_decoder_for_PositiveNegative) { _cached_decoder_for_PositiveNegative = $._decode_inextensible_choice<PositiveNegative>({
    "CONTEXT 2": [ "responsePositive", $._decode_implicit<PositiveNegative_responsePositive>(() => _decode_PositiveNegative_responsePositive) ],
    "CONTEXT 3": [ "responseNegative", $._decode_implicit<GlbErrors>(() => _decode_GlbErrors) ]
}); }
    return _cached_decoder_for_PositiveNegative(el);
}

let _cached_encoder_for_PositiveNegative: $.ASN1Encoder<PositiveNegative> | null = null;

/**
 * @summary Encodes a(n) PositiveNegative into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PositiveNegative, encoded as an ASN.1 Element.
 */
export
function _encode_PositiveNegative (value: PositiveNegative, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PositiveNegative) { _cached_encoder_for_PositiveNegative = $._encode_choice<PositiveNegative>({
    "responsePositive": $._encode_implicit(_TagClass.context, 2, () => _encode_PositiveNegative_responsePositive, $.BER),
    "responseNegative": $._encode_implicit(_TagClass.context, 3, () => _encode_GlbErrors, $.BER),
}, $.BER); }
    return _cached_encoder_for_PositiveNegative(value, elGetter);
}


/* eslint-enable */
