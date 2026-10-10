/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfIntegrityInfo } from "./maxNumOfIntegrityInfo.va.mjs";

/**
 * @summary IntegrityProtectionInformation
 * @description
 *
 * Integrity Protection Information element of 3GPP TS 25.413, encoded as in
 * that specification. OCTET STRING SIZE (18..100). Padding bits, if needed, are
 * in the least significant bits of the last octet. Used in handover. (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.6.8 and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntegrityProtectionInformation  ::=  OCTET STRING (SIZE (18..maxNumOfIntegrityInfo))
 * ```
 */
export
type IntegrityProtectionInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) IntegrityProtectionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IntegrityProtectionInformation = (el: _Element): IntegrityProtectionInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 18 || value.length > maxNumOfIntegrityInfo) {
        throw new ASN1SizeError("IntegrityProtectionInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) IntegrityProtectionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntegrityProtectionInformation, encoded as an ASN.1 Element.
 */
export const _encode_IntegrityProtectionInformation = $._encodeOctetString;


/* eslint-enable */
