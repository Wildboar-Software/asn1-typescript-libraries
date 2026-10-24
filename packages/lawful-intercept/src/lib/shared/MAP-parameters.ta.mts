/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MAP_parameters
 * @description
 *
 * Each octet string is one MAP parameter, coded as described in GSM 09.02. The
 * `map-TS-Code` is included. The module names no further parameters.
 *
 * Clause A.5.1 treats GSM MAP supplementary services (3GPP TS 09.02) by the
 * same principles as the DSS1 services they relate to.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.5.1, clause D.1, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE(1..256))
 * ```
 */
export
type MAP_parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_MAP_parameters: $.ASN1Decoder<MAP_parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_parameters (el: _Element): MAP_parameters {
    if (!_cached_decoder_for_MAP_parameters) { _cached_decoder_for_MAP_parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_MAP_parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("MAP_parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("MAP_parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_MAP_parameters: $.ASN1Encoder<MAP_parameters> | null = null;

/**
 * @summary Encodes a(n) MAP_parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_parameters, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_parameters (value: MAP_parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_parameters) { _cached_encoder_for_MAP_parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MAP_parameters(value, elGetter);
}


/* eslint-enable */
