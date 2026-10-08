/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxLongSignalInfoLength } from "./maxLongSignalInfoLength.va.mjs";

/**
 * @summary LongSignalInfo
 * @description
 *
 * Access-network signal octets. Size 1..`maxLongSignalInfoLength` (2560). That
 * bound is the maximum using White Book SCCP with the maximum number of
 * segments, accounting for lower-layer octets and other information elements in
 * the same component.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.9.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LongSignalInfo  ::=  OCTET STRING (SIZE (1..maxLongSignalInfoLength))
 * ```
 */
export
type LongSignalInfo = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LongSignalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LongSignalInfo = (el: _Element): LongSignalInfo => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > maxLongSignalInfoLength) {
        throw new ASN1SizeError("LongSignalInfo violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) LongSignalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LongSignalInfo, encoded as an ASN.1 Element.
 */
export const _encode_LongSignalInfo = $._encodeOctetString;


/* eslint-enable */
