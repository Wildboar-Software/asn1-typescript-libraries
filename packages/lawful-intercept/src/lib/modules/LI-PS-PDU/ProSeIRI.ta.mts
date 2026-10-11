/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as ProSeHI2Operations from "../ProSeHI2Operations/index.mjs";

// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../ProSeHI2Operations/IRI-Parameters.ta.mjs";
// export { ProSeIRIsContent, _decode_ProSeIRIsContent, _encode_ProSeIRIsContent } from "../ProSeHI2Operations/ProSeIRIsContent.ta.mjs";


/**
 * @summary ProSeIRI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeIRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-ProSe-Parameters    [0] ProSeHI2Operations.IRI-Parameters,
 *     proseIRIsContent        [1] ProSeHI2Operations.ProSeIRIsContent,
 *     ...
 * }
 * ```
 */
export
type ProSeIRI =
    { iRI_ProSe_Parameters: ProSeHI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { proseIRIsContent: ProSeHI2Operations.ProSeIRIsContent } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ProSeIRI: $.ASN1Decoder<ProSeIRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProSeIRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProSeIRI (el: _Element): ProSeIRI {
    if (!_cached_decoder_for_ProSeIRI) { _cached_decoder_for_ProSeIRI = $._decode_extensible_choice<ProSeIRI>({
    "CONTEXT 0": [ "iRI_ProSe_Parameters", $._decode_implicit<ProSeHI2Operations.IRI_Parameters>(() => ProSeHI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "proseIRIsContent", $._decode_explicit<ProSeHI2Operations.ProSeIRIsContent>(() => ProSeHI2Operations._decode_ProSeIRIsContent) ]
}); }
    return _cached_decoder_for_ProSeIRI(el);
}

let _cached_encoder_for_ProSeIRI: $.ASN1Encoder<ProSeIRI> | null = null;

/**
 * @summary Encodes a(n) ProSeIRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProSeIRI, encoded as an ASN.1 Element.
 */
export
function _encode_ProSeIRI (value: ProSeIRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProSeIRI) { _cached_encoder_for_ProSeIRI = $._encode_choice<ProSeIRI>({
    "iRI_ProSe_Parameters": $._encode_implicit(_TagClass.context, 0, () => ProSeHI2Operations._encode_IRI_Parameters, $.BER),
    "proseIRIsContent": $._encode_explicit(_TagClass.context, 1, () => ProSeHI2Operations._encode_ProSeIRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProSeIRI(value, elGetter);
}


/* eslint-enable */
