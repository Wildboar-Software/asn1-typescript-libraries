/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_SS_parameters_codeset_6
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-SS-parameters-codeset-6  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_SS_parameters_codeset_6 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_SS_parameters_codeset_6: $.ASN1Decoder<DSS1_SS_parameters_codeset_6> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_SS_parameters_codeset_6
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_SS_parameters_codeset_6 (el: _Element): DSS1_SS_parameters_codeset_6 {
    if (!_cached_decoder_for_DSS1_SS_parameters_codeset_6) { _cached_decoder_for_DSS1_SS_parameters_codeset_6 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    return _cached_decoder_for_DSS1_SS_parameters_codeset_6(el);
}

let _cached_encoder_for_DSS1_SS_parameters_codeset_6: $.ASN1Encoder<DSS1_SS_parameters_codeset_6> | null = null;

/**
 * @summary Encodes a(n) DSS1_SS_parameters_codeset_6 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_SS_parameters_codeset_6, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_SS_parameters_codeset_6 (value: DSS1_SS_parameters_codeset_6, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_SS_parameters_codeset_6) { _cached_encoder_for_DSS1_SS_parameters_codeset_6 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_SS_parameters_codeset_6(value, elGetter);
}


/* eslint-enable */
