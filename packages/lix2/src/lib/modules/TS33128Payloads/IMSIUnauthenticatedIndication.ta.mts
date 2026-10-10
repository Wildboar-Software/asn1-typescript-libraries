/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIUnauthenticatedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSIUnauthenticatedIndication  ::=  BOOLEAN
 * ```
 */
export
type IMSIUnauthenticatedIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) IMSIUnauthenticatedIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IMSIUnauthenticatedIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) IMSIUnauthenticatedIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSIUnauthenticatedIndication, encoded as an ASN.1 Element.
 */
export const _encode_IMSIUnauthenticatedIndication = $._encodeBoolean;


/* eslint-enable */
