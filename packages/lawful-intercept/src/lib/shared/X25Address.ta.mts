/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X25Address
 * @description
 *
 * X.25 address carried as a data-node address, size 1 to 25 octets. The module
 * and annex B do not define the address layout.
 *
 * Clause D.1's general rule for an OCTET STRING puts the most significant
 * half-octet in bits 5 to 8 and the least significant half-octet in bits 1 to
 * 4. No imported format is named here, and no octet layout is stated.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, clause D.1, annex D, clause
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
 * X25Address  ::=  OCTET STRING (SIZE(1..25))
 * ```
 */
export
type X25Address = OCTET_STRING; // OctetStringType
export const _decode_X25Address: $.ASN1Decoder<X25Address> = (el: _Element): X25Address => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25) {
        throw new ASN1SizeError("X25Address violates SIZE constraint");
    }
    return value;
};
export const _encode_X25Address: $.ASN1Encoder<X25Address> = $._encodeOctetString;


/* eslint-enable */
