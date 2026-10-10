/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANTargetToSourceContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANTargetToSourceContainer  ::=  OCTET STRING
 * ```
 */
export
type RANTargetToSourceContainer = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) RANTargetToSourceContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RANTargetToSourceContainer = $._decodeOctetString;

/**
 * @summary Encodes a(n) RANTargetToSourceContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RANTargetToSourceContainer, encoded as an ASN.1 Element.
 */
export const _encode_RANTargetToSourceContainer = $._encodeOctetString;


/* eslint-enable */
