/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfCCBS_Requests } from "./maxNumOfCCBS-Requests.va.mjs";

/**
 * @summary CCBS_Index
 * @description
 *
 * INTEGER (1..maxNumOfCCBS-Requests) (3GPP TS 29.002 V19.1.0 clause 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-Index   ::=  INTEGER (1..maxNumOfCCBS-Requests)
 * ```
 */
export
type CCBS_Index = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_Index
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CCBS_Index = (el: _Element): CCBS_Index => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxNumOfCCBS_Requests) {
        throw new ASN1OverflowError("CCBS_Index violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) CCBS_Index into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_Index, encoded as an ASN.1 Element.
 */
export const _encode_CCBS_Index = $._encodeInteger;


/* eslint-enable */
