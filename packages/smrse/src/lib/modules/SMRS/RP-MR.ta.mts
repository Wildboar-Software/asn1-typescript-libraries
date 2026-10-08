/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RP_MR
 * @description
 *
 * Message reference correlating a relay, or in this profile an
 * alert, with its `RPAck` or `RPError`.
 *
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * clause 3.2 defines `RP-MR` as application tag 2, range 0..255.
 * This profile uses a universal integer, range 0..65535. This
 * module enforces that range.
 *
 * When more-messages-to-send is used, clause 2.2 requires the
 * mobile-terminated reference to stay unchanged until every message
 * to that destination has been sent.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RP-MR  ::=  INTEGER (0..65535)
 * ```
 */
export
type RP_MR = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RP_MR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RP_MR = (el: _Element): RP_MR => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 65535) {
        throw new ASN1OverflowError("RP_MR violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) RP_MR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RP_MR, encoded as an ASN.1 Element.
 */
export const _encode_RP_MR = $._encodeInteger;


/* eslint-enable */
