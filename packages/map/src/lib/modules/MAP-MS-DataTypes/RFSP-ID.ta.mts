/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RFSP_ID
 * @description
 *
 * Subscriber Profile ID for RAT/Frequency Priority (1..256). See 3GPP TS
 * 23.401, 36.413, and 23.060.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 8.8.1.3 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RFSP-ID  ::=   INTEGER (1..256)
 * ```
 */
export
type RFSP_ID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) RFSP_ID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RFSP_ID = (el: _Element): RFSP_ID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 1 || n > 256) {
        throw new ASN1OverflowError("RFSP_ID violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) RFSP_ID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RFSP_ID, encoded as an ASN.1 Element.
 */
export const _encode_RFSP_ID = $._encodeInteger;


/* eslint-enable */
