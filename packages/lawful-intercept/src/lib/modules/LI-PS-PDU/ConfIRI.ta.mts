/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../CONFHI2Operations/IRI-Parameters.ta.mjs";
// export { ConfIRIsContent, _decode_ConfIRIsContent, _encode_ConfIRIsContent } from "../CONFHI2Operations/ConfIRIsContent.ta.mjs";


/**
 * @summary ConfIRI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfIRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-Conf-Parameters     [0] CONFHI2Operations.IRI-Parameters,
 *     confIRIsContent         [1] CONFHI2Operations.ConfIRIsContent,
 *     ...
 * }
 * ```
 */
export
type ConfIRI =
    { iRI_Conf_Parameters: CONFHI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { confIRIsContent: CONFHI2Operations.ConfIRIsContent } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfIRI: $.ASN1Decoder<ConfIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfIRI (el: _Element): ConfIRI {
    if (!_cached_decoder_for_ConfIRI) { _cached_decoder_for_ConfIRI = $._decode_extensible_choice<ConfIRI>({
    "CONTEXT 0": [ "iRI_Conf_Parameters", $._decode_implicit<CONFHI2Operations.IRI_Parameters>(() => CONFHI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "confIRIsContent", $._decode_explicit<CONFHI2Operations.ConfIRIsContent>(() => CONFHI2Operations._decode_ConfIRIsContent) ]
}); }
    return _cached_decoder_for_ConfIRI(el);
}

let _cached_encoder_for_ConfIRI: $.ASN1Encoder<ConfIRI> | null = null;

/**
 * @summary Encodes a(n) ConfIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfIRI, encoded as an ASN.1 Element.
 */
export
function _encode_ConfIRI (value: ConfIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfIRI) { _cached_encoder_for_ConfIRI = $._encode_choice<ConfIRI>({
    "iRI_Conf_Parameters": $._encode_implicit(_TagClass.context, 0, () => CONFHI2Operations._encode_IRI_Parameters, $.BER),
    "confIRIsContent": $._encode_explicit(_TagClass.context, 1, () => CONFHI2Operations._encode_ConfIRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfIRI(value, elGetter);
}


/* eslint-enable */
