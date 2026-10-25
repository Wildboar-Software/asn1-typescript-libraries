/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DSS1_SS_parameters_codeset_0
 * @description
 *
 * Each octet string is one DSS1 codeset-0 parameter, coded as in EN 300 403-1,
 * including the DSS1 information-element identifier and the DSS1 length,
 * except where a parameter names another ETSI document. Further parameters may
 * be added. Table A.3.2 places these in `supplementary-Services-Information`.
 * Clause A.6.20 includes subaddress information elements in the IRI wherever
 * they are present.
 *
 * Calling party subaddress, EN 300 403-1, with the calling party. Called party
 * subaddress, EN 300 403-1, with the calling party. Connected subaddress, EN
 * 300 097-1, with the called party or the forwarded-to party. Connected
 * number, EN 300 097-1, with the called party or the forwarded-to party.
 * Keypad facility, EN 300 403-1, with the calling party, the called party, or
 * the forwarded-to party. Called party number, EN 300 403-1, with the calling
 * party when the target is the originating party: the dialled digits before
 * network modification (IN interaction, translation, and similar). Table A.8.2
 * maps that dialled number to the originating party's DSS1 called-party
 * number. User-user, EN 300 286-1, with the calling party, the called party,
 * or the forwarded-to party. Clause A.6.22 reports user-to-user signalling
 * (UUS1, UUS2, and UUS3) on HI3 or on HI2.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6.20, clause A.6.22, table
 * A.3.2, table A.8.2, clause D.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DSS1-SS-parameters-codeset-0  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type DSS1_SS_parameters_codeset_0 = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_DSS1_SS_parameters_codeset_0: $.ASN1Decoder<DSS1_SS_parameters_codeset_0> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DSS1_SS_parameters_codeset_0
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DSS1_SS_parameters_codeset_0 (el: _Element): DSS1_SS_parameters_codeset_0 {
    if (!_cached_decoder_for_DSS1_SS_parameters_codeset_0) { _cached_decoder_for_DSS1_SS_parameters_codeset_0 = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_DSS1_SS_parameters_codeset_0(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("DSS1_SS_parameters_codeset_0 violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("DSS1_SS_parameters_codeset_0 element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_DSS1_SS_parameters_codeset_0: $.ASN1Encoder<DSS1_SS_parameters_codeset_0> | null = null;

/**
 * @summary Encodes a(n) DSS1_SS_parameters_codeset_0 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DSS1_SS_parameters_codeset_0, encoded as an ASN.1 Element.
 */
export
function _encode_DSS1_SS_parameters_codeset_0 (value: DSS1_SS_parameters_codeset_0, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DSS1_SS_parameters_codeset_0) { _cached_encoder_for_DSS1_SS_parameters_codeset_0 = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_DSS1_SS_parameters_codeset_0(value, elGetter);
}


/* eslint-enable */
