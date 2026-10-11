/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNrOfRABs } from "./maxNrOfRABs.va.mjs";

/**
 * @summary RAB_Id
 * @description
 *
 * Radio access bearer identifier as in 3GPP TS 25.413. Relates radio resources
 * with radio access bearers. In Prepare HO, included when MSC-A supports
 * multiple bearers, access network protocol is BSSAP, and the RAB ID is other
 * than 1.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.2.57, 8.4.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAB-Id  ::=  INTEGER (1..maxNrOfRABs)
 * ```
 */
export
type RAB_Id = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RAB_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RAB_Id = (el: _Element): RAB_Id => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxNrOfRABs) {
        throw new ASN1OverflowError("RAB_Id violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) RAB_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RAB_Id, encoded as an ASN.1 Element.
 */
export const _encode_RAB_Id = $._encodeInteger;


/* eslint-enable */
