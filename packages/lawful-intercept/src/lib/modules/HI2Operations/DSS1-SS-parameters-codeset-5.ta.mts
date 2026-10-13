/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_SS_parameters_codeset_5
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-SS-parameters-codeset-5  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_SS_parameters_codeset_5 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_SS_parameters_codeset_5: $.ASN1Decoder<DSS1_SS_parameters_codeset_5> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_SS_parameters_codeset_5
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_SS_parameters_codeset_5 (el: _Element): DSS1_SS_parameters_codeset_5 {
    if (!_cached_decoder_for_DSS1_SS_parameters_codeset_5) { _cached_decoder_for_DSS1_SS_parameters_codeset_5 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DSS1_SS_parameters_codeset_5(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("DSS1_SS_parameters_codeset_5 violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("DSS1_SS_parameters_codeset_5 element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_DSS1_SS_parameters_codeset_5: $.ASN1Encoder<DSS1_SS_parameters_codeset_5> | null = null;

/**
 * @summary Encodes a(n) DSS1_SS_parameters_codeset_5 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_SS_parameters_codeset_5, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_SS_parameters_codeset_5 (value: DSS1_SS_parameters_codeset_5, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_SS_parameters_codeset_5) { _cached_encoder_for_DSS1_SS_parameters_codeset_5 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_SS_parameters_codeset_5(value, elGetter);
}


/* eslint-enable */
