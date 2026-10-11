/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfMC_Bearers } from "./maxNumOfMC-Bearers.va.mjs";

/**
 * @summary MC_Bearers
 * @description
 *
 * Number of multicall bearers. Integer 1..`maxNumOfMC-Bearers` (7). Related to
 * simultaneous bearers supported per user by the serving network.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.2.52).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MC-Bearers  ::=  INTEGER (1..maxNumOfMC-Bearers)
 * ```
 */
export
type MC_Bearers = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) MC_Bearers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_MC_Bearers = (el: _Element): MC_Bearers => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > maxNumOfMC_Bearers) {
        throw new ASN1OverflowError("MC_Bearers violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) MC_Bearers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MC_Bearers, encoded as an ASN.1 Element.
 */
export const _encode_MC_Bearers = $._encodeInteger;


/* eslint-enable */
