/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GSEMngtResponsePdu, _decode_GSEMngtResponsePdu, _encode_GSEMngtResponsePdu } from "../IEC61850/GSEMngtResponsePdu.ta.mjs";
// export { GSEMngtResponsePdu, _decode_GSEMngtResponsePdu, _encode_GSEMngtResponsePdu } from "../IEC61850/GSEMngtResponsePdu.ta.mjs";


/**
 * @summary GSEMngtResponses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSEMngtResponses  ::=  CHOICE {
 *     gseMngtNotSupported        [0] IMPLICIT NULL,
 *     getGoReference            [1] IMPLICIT GSEMngtResponsePdu,
 *     getGOOSEElementNumber    [2] IMPLICIT GSEMngtResponsePdu,
 *     getGsReference            [3] IMPLICIT GSEMngtResponsePdu,
 *     getGSSEDataOffset        [4] IMPLICIT GSEMngtResponsePdu,
 *     ...
 * }
 * ```
 */
export
type GSEMngtResponses =
    { gseMngtNotSupported: NULL } /* CHOICE_ALT_ROOT */
    | { getGoReference: GSEMngtResponsePdu } /* CHOICE_ALT_ROOT */
    | { getGOOSEElementNumber: GSEMngtResponsePdu } /* CHOICE_ALT_ROOT */
    | { getGsReference: GSEMngtResponsePdu } /* CHOICE_ALT_ROOT */
    | { getGSSEDataOffset: GSEMngtResponsePdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GSEMngtResponses: $.ASN1Decoder<GSEMngtResponses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSEMngtResponses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSEMngtResponses (el: _Element): GSEMngtResponses {
    if (!_cached_decoder_for_GSEMngtResponses) { _cached_decoder_for_GSEMngtResponses = $._decode_extensible_choice<GSEMngtResponses>({
    "CONTEXT 0": [ "gseMngtNotSupported", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "getGoReference", $._decode_implicit<GSEMngtResponsePdu>(() => _decode_GSEMngtResponsePdu) ],
    "CONTEXT 2": [ "getGOOSEElementNumber", $._decode_implicit<GSEMngtResponsePdu>(() => _decode_GSEMngtResponsePdu) ],
    "CONTEXT 3": [ "getGsReference", $._decode_implicit<GSEMngtResponsePdu>(() => _decode_GSEMngtResponsePdu) ],
    "CONTEXT 4": [ "getGSSEDataOffset", $._decode_implicit<GSEMngtResponsePdu>(() => _decode_GSEMngtResponsePdu) ]
}); }
    return _cached_decoder_for_GSEMngtResponses(el);
}

let _cached_encoder_for_GSEMngtResponses: $.ASN1Encoder<GSEMngtResponses> | null = null;

/**
 * @summary Encodes a(n) GSEMngtResponses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSEMngtResponses, encoded as an ASN.1 Element.
 */
export
function _encode_GSEMngtResponses (value: GSEMngtResponses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSEMngtResponses) { _cached_encoder_for_GSEMngtResponses = $._encode_choice<GSEMngtResponses>({
    "gseMngtNotSupported": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "getGoReference": $._encode_implicit(_TagClass.context, 1, () => _encode_GSEMngtResponsePdu, $.BER),
    "getGOOSEElementNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_GSEMngtResponsePdu, $.BER),
    "getGsReference": $._encode_implicit(_TagClass.context, 3, () => _encode_GSEMngtResponsePdu, $.BER),
    "getGSSEDataOffset": $._encode_implicit(_TagClass.context, 4, () => _encode_GSEMngtResponsePdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_GSEMngtResponses(value, elGetter);
}


/* eslint-enable */
