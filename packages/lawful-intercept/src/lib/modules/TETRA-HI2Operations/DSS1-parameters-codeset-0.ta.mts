/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_parameters_codeset_0
 * @description
 * 
 * DSS1 codeset-0 parameters of the basic call, one parameter per octet string,
 * coded as in EN 300 403-1, including the information-element identifier and
 * the DSS1 length. Bearer capability, high-layer compatibility, and low-layer
 * capability may each be repeated, and each may be supplied with the calling,
 * called, or forwarded-to party. Other parameters may be added. The coding is
 * imported, so half-octet order follows EN 300 403-1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-parameters-codeset-0  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_parameters_codeset_0 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_parameters_codeset_0: $.ASN1Decoder<DSS1_parameters_codeset_0> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_parameters_codeset_0
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_parameters_codeset_0 (el: _Element): DSS1_parameters_codeset_0 {
    if (!_cached_decoder_for_DSS1_parameters_codeset_0) { _cached_decoder_for_DSS1_parameters_codeset_0 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DSS1_parameters_codeset_0(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("DSS1_parameters_codeset_0 violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("DSS1_parameters_codeset_0 element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_DSS1_parameters_codeset_0: $.ASN1Encoder<DSS1_parameters_codeset_0> | null = null;

/**
 * @summary Encodes a(n) DSS1_parameters_codeset_0 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_parameters_codeset_0, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_parameters_codeset_0 (value: DSS1_parameters_codeset_0, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_parameters_codeset_0) { _cached_encoder_for_DSS1_parameters_codeset_0 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_parameters_codeset_0(value, elGetter);
}


/* eslint-enable */
