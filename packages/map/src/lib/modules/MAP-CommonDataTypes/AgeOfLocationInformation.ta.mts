/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocationInformation
 * @description
 *
 * Elapsed time in minutes since the last network contact of the mobile station
 * (actuality of the location information). 0 means the MS is currently in
 * contact with the network. 32767 means the location information is at least
 * 32767 minutes old. Related to Age of Location Estimate in LCS.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.11.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocationInformation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocationInformation = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) AgeOfLocationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AgeOfLocationInformation = (el: _Element): AgeOfLocationInformation => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 32767) {
        throw new ASN1OverflowError("AgeOfLocationInformation violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) AgeOfLocationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AgeOfLocationInformation, encoded as an ASN.1 Element.
 */
export const _encode_AgeOfLocationInformation = $._encodeInteger;


/* eslint-enable */
