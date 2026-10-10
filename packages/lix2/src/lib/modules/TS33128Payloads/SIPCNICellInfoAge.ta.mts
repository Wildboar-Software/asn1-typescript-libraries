/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIPCNICellInfoAge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIPCNICellInfoAge  ::=  INTEGER(0..999999999)
 * ```
 */
export
type SIPCNICellInfoAge = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) SIPCNICellInfoAge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SIPCNICellInfoAge = (el: _Element): SIPCNICellInfoAge => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 999999999n) {
        throw new ASN1OverflowError("SIPCNICellInfoAge violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) SIPCNICellInfoAge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIPCNICellInfoAge, encoded as an ASN.1 Element.
 */
export const _encode_SIPCNICellInfoAge = $._encodeInteger;


/* eslint-enable */
