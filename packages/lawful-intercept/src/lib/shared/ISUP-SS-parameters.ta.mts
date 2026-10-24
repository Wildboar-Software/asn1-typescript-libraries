/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUP_SS_parameters
 * @description
 *
 * Retained for compatibility. It should not be used in new work; use
 * `ISUP-parameters`.
 *
 * Each octet string is one additional ISUP parameter, tag-length-value, not
 * already defined in the previous parameters. The tag is the one given in EN
 * 300 356. Length and value follow EN 300 356. Further parameters may be
 * added. Table A.3.2 places these parameters in
 * `supplementary-Services-Information`.
 *
 * Connected number (called party or forwarded-to party). Redirecting number
 * (originating party and/or terminating party). Original called party number
 * (originating party). Redirection information (originating party,
 * forwarded-to party, and/or terminating party). Redirection number
 * (forwarded-to party or terminating party). Call diversion information
 * (forwarded-to party or terminating party). Generic number (calling party,
 * called party, or forwarded-to party), used for additional identities such as
 * an additional calling party number or an additional called number. Generic
 * notification (calling party, called party, or forwarded-to party), which
 * notifies the other part of the call of supplementary services activated or
 * invoked by a subscriber during the call. CUG interlock code (calling party).
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table A.3.2, clause A.3.2.3, clause D.1,
 * annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
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
