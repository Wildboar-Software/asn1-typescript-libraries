/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CS_AllocationRetentionPriority
 * @description
 *
 * Allocation/retention priority for Circuit Switched, corresponding to 3GPP TS
 * 23.107. Encodes each priority level as the binary value of the priority
 * level. Used only by the VLR; if the SGSN or IWF receives this parameter it
 * shall ignore it (3GPP TS 29.002 V19.1.0 clauses 7.6.3.87, 8.8.1.3 and
 * 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-AllocationRetentionPriority  ::=  OCTET STRING (SIZE (1))
 * ```
 */
export
type CS_AllocationRetentionPriority = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) CS_AllocationRetentionPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CS_AllocationRetentionPriority = (el: _Element): CS_AllocationRetentionPriority => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("CS_AllocationRetentionPriority violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) CS_AllocationRetentionPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_AllocationRetentionPriority, encoded as an ASN.1 Element.
 */
export const _encode_CS_AllocationRetentionPriority = $._encodeOctetString;


/* eslint-enable */
