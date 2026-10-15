/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUP_SS_parameters
 * @description
 * 
 * Additional ISUP parameters for supplementary services, one TLV per octet
 * string. The tag is the tag of EN 300 356. Length and value follow that
 * specification. Retained for compatibility. New work should use
 * `ISUP-parameters`. The coding is imported, so half-octet order follows EN 300
 * 356.
 *
 * Connected number may be supplied with the called or forwarded-to party.
 * Redirecting number may be supplied with the originating party or the
 * terminating party. Original called number may be supplied with the
 * originating party. Redirection information may be supplied with the
 * originating, forwarded-to, or terminating party. Redirection number and
 * call-diversion information may be supplied with the forwarded-to or
 * terminating party. Generic number carries extra identities and may be
 * supplied with the calling, called, or forwarded-to party. Generic
 * notification tells the other party which supplementary services were
 * activated or invoked, for those same parties. CUG interlock code may be
 * supplied with the calling party. Other parameters may be added.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.6, clause D.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISUP-SS-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type ISUP_SS_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_ISUP_SS_parameters: $.ASN1Decoder<ISUP_SS_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISUP_SS_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISUP_SS_parameters (el: _Element): ISUP_SS_parameters {
    if (!_cached_decoder_for_ISUP_SS_parameters) { _cached_decoder_for_ISUP_SS_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_ISUP_SS_parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("ISUP_SS_parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("ISUP_SS_parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ISUP_SS_parameters: $.ASN1Encoder<ISUP_SS_parameters> | null = null;

/**
 * @summary Encodes a(n) ISUP_SS_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISUP_SS_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_ISUP_SS_parameters (value: ISUP_SS_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISUP_SS_parameters) { _cached_encoder_for_ISUP_SS_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ISUP_SS_parameters(value, elGetter);
}


/* eslint-enable */
