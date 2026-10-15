/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_SS_parameters_codeset_7
 * @description
 *
 * Each octet string is one DSS1 codeset-7 parameter, coded as described in the
 * relevant user-specific recommendation. The module gives no parameter list
 * and does not name that recommendation.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.4, clause D.1, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-SS-parameters-codeset-7  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_SS_parameters_codeset_7 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_SS_parameters_codeset_7: $.ASN1Decoder<DSS1_SS_parameters_codeset_7> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_SS_parameters_codeset_7
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_SS_parameters_codeset_7 (el: _Element): DSS1_SS_parameters_codeset_7 {
    if (!_cached_decoder_for_DSS1_SS_parameters_codeset_7) { _cached_decoder_for_DSS1_SS_parameters_codeset_7 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DSS1_SS_parameters_codeset_7(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("DSS1_SS_parameters_codeset_7 violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("DSS1_SS_parameters_codeset_7 element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_DSS1_SS_parameters_codeset_7: $.ASN1Encoder<DSS1_SS_parameters_codeset_7> | null = null;

/**
 * @summary Encodes a(n) DSS1_SS_parameters_codeset_7 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_SS_parameters_codeset_7, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_SS_parameters_codeset_7 (value: DSS1_SS_parameters_codeset_7, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_SS_parameters_codeset_7) { _cached_encoder_for_DSS1_SS_parameters_codeset_7 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_SS_parameters_codeset_7(value, elGetter);
}


/* eslint-enable */
