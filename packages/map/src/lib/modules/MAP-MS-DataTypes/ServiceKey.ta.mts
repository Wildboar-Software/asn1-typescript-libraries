/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceKey
 * @description
 *
 * CAMEL service key identifying the service logic in the gsmSCF
 * (0..2147483647).
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceKey  ::=  INTEGER (0..2147483647)
 * ```
 */
export
type ServiceKey = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceKey = (el: _Element): ServiceKey => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 2147483647) {
        throw new ASN1OverflowError("ServiceKey violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) ServiceKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceKey, encoded as an ASN.1 Element.
 */
export const _encode_ServiceKey = $._encodeInteger;


/* eslint-enable */
