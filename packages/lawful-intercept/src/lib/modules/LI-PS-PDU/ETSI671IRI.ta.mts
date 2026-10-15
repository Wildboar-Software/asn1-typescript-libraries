/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import * as HI2Operations from "../HI2Operations/index.mjs";
// export { IRI_Parameters, _decode_IRI_Parameters, _encode_IRI_Parameters } from "../HI2Operations/IRI-Parameters.ta.mjs";
// export { IRIsContent, _decode_IRIsContent, _encode_IRIsContent } from "../HI2Operations/IRIsContent.ta.mjs";


/**
 * @summary ETSI671IRI
 * @description
 * 
 * Circuit-style HI2 from ETSI TS 101 671: either `IRI-Parameters` or
 * `IRIsContent`. The choice may be commented out when it is unused.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 4.3, annex A, clause A.3.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ETSI671IRI  ::=  CHOICE
 *     -- This structure may be commented out if not used
 * {
 *     iRI-Parameters  [0] HI2Operations.IRI-Parameters,
 *     iRIsContent     [1] HI2Operations.IRIsContent,
 *     ...
 * }
 * ```
 */
export
type ETSI671IRI =
    { iRI_Parameters: HI2Operations.IRI_Parameters } /* CHOICE_ALT_ROOT */
    | { iRIsContent: HI2Operations.IRIsContent } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ETSI671IRI: $.ASN1Decoder<ETSI671IRI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ETSI671IRI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ETSI671IRI (el: _Element): ETSI671IRI {
    if (!_cached_decoder_for_ETSI671IRI) { _cached_decoder_for_ETSI671IRI = $._decode_extensible_choice<ETSI671IRI>({
    "CONTEXT 0": [ "iRI_Parameters", $._decode_implicit<HI2Operations.IRI_Parameters>(() => HI2Operations._decode_IRI_Parameters) ],
    "CONTEXT 1": [ "iRIsContent", $._decode_explicit<HI2Operations.IRIsContent>(() => HI2Operations._decode_IRIsContent) ]
}); }
    return _cached_decoder_for_ETSI671IRI(el);
}

let _cached_encoder_for_ETSI671IRI: $.ASN1Encoder<ETSI671IRI> | null = null;

/**
 * @summary Encodes a(n) ETSI671IRI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ETSI671IRI, encoded as an ASN.1 Element.
 */
export
function _encode_ETSI671IRI (value: ETSI671IRI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ETSI671IRI) { _cached_encoder_for_ETSI671IRI = $._encode_choice<ETSI671IRI>({
    "iRI_Parameters": $._encode_implicit(_TagClass.context, 0, () => HI2Operations._encode_IRI_Parameters, $.BER),
    "iRIsContent": $._encode_explicit(_TagClass.context, 1, () => HI2Operations._encode_IRIsContent, $.BER),
}, $.BER); }
    return _cached_encoder_for_ETSI671IRI(value, elGetter);
}


/* eslint-enable */
