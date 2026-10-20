/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InvolvedParty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvolvedParty  ::=  CHOICE {
 *    sIP-URI       [0] IMPLICIT GraphicString,
 *    tEL-URI       [1] IMPLICIT GraphicString,
 *    uRN           [2] IMPLICIT GraphicString,
 *    iSDN-E164     [3] IMPLICIT GraphicString}
 * ```
 */
export
type InvolvedParty =
    { sIP_URI: GraphicString } /* CHOICE_ALT_ROOT */
    | { tEL_URI: GraphicString } /* CHOICE_ALT_ROOT */
    | { uRN: GraphicString } /* CHOICE_ALT_ROOT */
    | { iSDN_E164: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InvolvedParty: $.ASN1Decoder<InvolvedParty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvolvedParty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvolvedParty (el: _Element): InvolvedParty {
    if (!_cached_decoder_for_InvolvedParty) { _cached_decoder_for_InvolvedParty = $._decode_inextensible_choice<InvolvedParty>({
    "CONTEXT 0": [ "sIP_URI", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ],
    "CONTEXT 1": [ "tEL_URI", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ],
    "CONTEXT 2": [ "uRN", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ],
    "CONTEXT 3": [ "iSDN_E164", $._decode_implicit<GraphicString>(() => $._decodeGraphicString) ]
}); }
    return _cached_decoder_for_InvolvedParty(el);
}

let _cached_encoder_for_InvolvedParty: $.ASN1Encoder<InvolvedParty> | null = null;

/**
 * @summary Encodes a(n) InvolvedParty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvolvedParty, encoded as an ASN.1 Element.
 */
export
function _encode_InvolvedParty (value: InvolvedParty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvolvedParty) { _cached_encoder_for_InvolvedParty = $._encode_choice<InvolvedParty>({
    "sIP_URI": $._encode_implicit(_TagClass.context, 0, () => $._encodeGraphicString, $.BER),
    "tEL_URI": $._encode_implicit(_TagClass.context, 1, () => $._encodeGraphicString, $.BER),
    "uRN": $._encode_implicit(_TagClass.context, 2, () => $._encodeGraphicString, $.BER),
    "iSDN_E164": $._encode_implicit(_TagClass.context, 3, () => $._encodeGraphicString, $.BER),
}, $.BER); }
    return _cached_encoder_for_InvolvedParty(value, elGetter);
}


/* eslint-enable */
