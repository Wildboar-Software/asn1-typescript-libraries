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
 * X.25 address. Clause 6.2.1 allows an X.25 address as a network element
 * identifier. The module comment on the X.25 form of
 * `Network-Element-Identifier` says only "X25 address". The present document
 * states no further coding.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
