/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfRelocationNumber } from "./maxNumOfRelocationNumber.va.mjs";

/**
 * @summary MulticallBearerInfo
 * @description
 *
 * Number of simultaneous bearers supported per user by the serving network
 * (1..7). (3GPP TS 29.002 V19.1.0 clauses 7.6.2.52 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MulticallBearerInfo  ::=  INTEGER (1..maxNumOfRelocationNumber)
 * ```
 */
export
type MulticallBearerInfo = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MulticallBearerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MulticallBearerInfo = (el: _Element): MulticallBearerInfo => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxNumOfRelocationNumber) {
        throw new ASN1OverflowError("MulticallBearerInfo violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) MulticallBearerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MulticallBearerInfo, encoded as an ASN.1 Element.
 */
export const _encode_MulticallBearerInfo = $._encodeInteger;


/* eslint-enable */
