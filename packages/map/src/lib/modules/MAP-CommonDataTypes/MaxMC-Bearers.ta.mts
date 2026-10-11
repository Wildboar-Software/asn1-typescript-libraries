/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfMC_Bearers } from "./maxNumOfMC-Bearers.va.mjs";

/**
 * @summary MaxMC_Bearers
 * @description
 *
 * Maximum number of multicall bearers. Integer 2..`maxNumOfMC-Bearers` (7).
 *
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaxMC-Bearers  ::=  INTEGER (2..maxNumOfMC-Bearers)
 * ```
 */
export
type MaxMC_Bearers = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MaxMC_Bearers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MaxMC_Bearers = (el: _Element): MaxMC_Bearers => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 2 || n > maxNumOfMC_Bearers) {
        throw new ASN1OverflowError("MaxMC_Bearers violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) MaxMC_Bearers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxMC_Bearers, encoded as an ASN.1 Element.
 */
export const _encode_MaxMC_Bearers = $._encodeInteger;


/* eslint-enable */
