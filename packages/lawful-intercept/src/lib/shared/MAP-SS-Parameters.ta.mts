/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MAP_SS_Parameters
 * @description
 *
 * Each octet string is one MAP parameter, coded as in the relevant MAP
 * supplementary-service recommendation. The module gives no parameter list.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.5.3, clause D.1, annex D, clause
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
 * MAP-SS-Parameters  ::=  SET SIZE (1..256) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type MAP_SS_Parameters = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_MAP_SS_Parameters: $.ASN1Decoder<MAP_SS_Parameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_SS_Parameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_SS_Parameters (el: _Element): MAP_SS_Parameters {
    if (!_cached_decoder_for_MAP_SS_Parameters) { _cached_decoder_for_MAP_SS_Parameters = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_MAP_SS_Parameters(el);
    if (_value.length < 1 || _value.length > 256) {
        throw new ASN1SizeError("MAP_SS_Parameters violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("MAP_SS_Parameters element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_MAP_SS_Parameters: $.ASN1Encoder<MAP_SS_Parameters> | null = null;

/**
 * @summary Encodes a(n) MAP_SS_Parameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_SS_Parameters, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_SS_Parameters (value: MAP_SS_Parameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_SS_Parameters) { _cached_encoder_for_MAP_SS_Parameters = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_MAP_SS_Parameters(value, elGetter);
}


/* eslint-enable */
