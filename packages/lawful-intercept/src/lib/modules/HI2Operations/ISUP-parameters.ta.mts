/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ISUP_parameters
 * @description
 *
 * Each octet string is one ISUP parameter, tag-length-value, that is not
 * already carried in an earlier parameter. The tag is the one given in EN 300
 * 356. Length and value follow that parameter's definition in EN 300 356.
 * Further parameters may be added.
 *
 * Transmission medium requirement, and transmission medium requirement prime,
 * may be provided with the party information of the calling party.
 *
 * In version 1, `iSUP-parameters` is mandatory. If no ISUP parameter is
 * available, a version 1 implementation may include the value zero in the
 * first octet string.
 *
 * Clause A.3.2.2 places the release cause here or in
 * `DSS1-parameters-codeset-0`: the cause received from the signalling
 * protocol, sent with the party that initiated the release, or with either
 * party when the network initiated the release. Table A.3.2 places
 * transmission medium requirement in `services-Information`.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, table A.3.2, clause D.1,
 * annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISUP-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type ISUP_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_ISUP_parameters: $.ASN1Decoder<ISUP_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISUP_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISUP_parameters (el: _Element): ISUP_parameters {
    if (!_cached_decoder_for_ISUP_parameters) { _cached_decoder_for_ISUP_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_ISUP_parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("ISUP_parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("ISUP_parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_ISUP_parameters: $.ASN1Encoder<ISUP_parameters> | null = null;

/**
 * @summary Encodes a(n) ISUP_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISUP_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_ISUP_parameters (value: ISUP_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISUP_parameters) { _cached_encoder_for_ISUP_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_ISUP_parameters(value, elGetter);
}


/* eslint-enable */
