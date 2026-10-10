/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



import { maxNumOfEncryptionInfo } from "./maxNumOfEncryptionInfo.va.mjs";

/**
 * @summary EncryptionInformation
 * @description
 *
 * Encryption Information element defined in 3GPP TS 25.413. Octets contain a
 * complete EncryptionInformation data type encoded as mandated by 3GPP TS
 * 25.413; padding bits, if needed, are in the least significant bits of the
 * last octet (3GPP TS 29.002 V19.1.0 clauses 7.6.6.9 and 17.7.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptionInformation  ::=  OCTET STRING (SIZE (18..maxNumOfEncryptionInfo))
 * ```
 */
export
type EncryptionInformation = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptionInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EncryptionInformation = (el: _Element): EncryptionInformation => {
    const value = $._decodeOctetString(el);
    if (value.length < 18 || value.length > maxNumOfEncryptionInfo) {
        throw new ASN1SizeError("EncryptionInformation violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) EncryptionInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptionInformation, encoded as an ASN.1 Element.
 */
export const _encode_EncryptionInformation = $._encodeOctetString;


/* eslint-enable */
