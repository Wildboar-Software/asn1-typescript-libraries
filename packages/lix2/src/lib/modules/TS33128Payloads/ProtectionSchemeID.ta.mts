/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProtectionSchemeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtectionSchemeID  ::=  INTEGER (0..15)
 * ```
 */
export
type ProtectionSchemeID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionSchemeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProtectionSchemeID = (el: _Element): ProtectionSchemeID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 15n) {
        throw new ASN1OverflowError("ProtectionSchemeID violates INTEGER range constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) ProtectionSchemeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionSchemeID, encoded as an ASN.1 Element.
 */
export const _encode_ProtectionSchemeID = $._encodeInteger;


/* eslint-enable */
