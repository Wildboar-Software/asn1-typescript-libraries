/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1OverflowError,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Group_Service_ID
 * @description
 *
 * Group Service identity. Values are defined in 3GPP TS 29.272 (3GPP TS 29.002
 * V19.1.0 clause 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Group-Service-ID  ::=  INTEGER (0..4294967295)
 * ```
 */
export
type Group_Service_ID = INTEGER;

/**
 * @summary Decodes an ASN.1 element into a(n) Group_Service_ID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_Group_Service_ID = (el: _Element): Group_Service_ID => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 4294967295) {
        throw new ASN1OverflowError("Group_Service_ID violates INTEGER range");
    }
    return value;
};

/**
 * @summary Encodes a(n) Group_Service_ID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Group_Service_ID, encoded as an ASN.1 Element.
 */
export const _encode_Group_Service_ID = $._encodeInteger;


/* eslint-enable */
