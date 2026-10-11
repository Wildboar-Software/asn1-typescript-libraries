/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CamelCapabilityHandling
 * @description
 *
 * CAMEL phase indicated by the CSI: 1 = phase 1, 2 = phase 2, 3 = phase 3, 4 =
 * phase 4. Reception of values greater than 4 shall be treated as CAMEL phase 4
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamelCapabilityHandling  ::=  INTEGER(1..16)
 * ```
 */
export
type CamelCapabilityHandling = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) CamelCapabilityHandling
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CamelCapabilityHandling = (el: _Element): CamelCapabilityHandling => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 16) {
        throw new ASN1OverflowError("CamelCapabilityHandling violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) CamelCapabilityHandling into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamelCapabilityHandling, encoded as an ASN.1 Element.
 */
export const _encode_CamelCapabilityHandling = $._encodeInteger;


/* eslint-enable */
