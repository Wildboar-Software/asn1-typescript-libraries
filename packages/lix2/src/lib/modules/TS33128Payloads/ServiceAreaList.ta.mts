/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAreaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaList  ::=  OCTET STRING (SIZE(4..112))
 * ```
 */
export
type ServiceAreaList = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAreaList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceAreaList = $._decodeOctetString;

/**
 * @summary Encodes a(n) ServiceAreaList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAreaList, encoded as an ASN.1 Element.
 */
export const _encode_ServiceAreaList = $._encodeOctetString;


/* eslint-enable */
