/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Other_Services
 * @description
 *
 * From one to fifty octet strings, each of size 1 to 256. The module says:
 * reference manufacturer manuals. No parameter list and no layout are given.
 *
 * Clause D.1's general rule for an OCTET STRING puts the most significant
 * half-octet in bits 5 to 8 and the least significant half-octet in bits 1 to
 * 4. No imported format is named here, and no octet layout is stated.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.3, clause D.1, annex D,
 * clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Other-Services  ::=  SET SIZE (1..50) OF OCTET STRING (SIZE (1..256))
 * ```
 */
export
type Other_Services = OCTET_STRING[]; // SetOfType

let _cached_decoder_for_Other_Services: $.ASN1Decoder<Other_Services> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Other_Services
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Other_Services (el: _Element): Other_Services {
    if (!_cached_decoder_for_Other_Services) { _cached_decoder_for_Other_Services = $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString); }
    const _value = _cached_decoder_for_Other_Services(el);
    if (_value.length < 1 || _value.length > 50) {
        throw new ASN1SizeError("Other_Services violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length < 1 || _item.length > 256) {
            throw new ASN1SizeError("Other_Services element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_Other_Services: $.ASN1Encoder<Other_Services> | null = null;

/**
 * @summary Encodes a(n) Other_Services into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Other_Services, encoded as an ASN.1 Element.
 */
export
function _encode_Other_Services (value: Other_Services, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Other_Services) { _cached_encoder_for_Other_Services = $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_Other_Services(value, elGetter);
}


/* eslint-enable */
