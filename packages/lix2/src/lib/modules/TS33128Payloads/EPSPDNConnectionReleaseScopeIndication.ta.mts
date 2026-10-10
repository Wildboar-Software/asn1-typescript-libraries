/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionReleaseScopeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionReleaseScopeIndication  ::=  BOOLEAN
 * ```
 */
export
type EPSPDNConnectionReleaseScopeIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNConnectionReleaseScopeIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_EPSPDNConnectionReleaseScopeIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) EPSPDNConnectionReleaseScopeIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNConnectionReleaseScopeIndication, encoded as an ASN.1 Element.
 */
export const _encode_EPSPDNConnectionReleaseScopeIndication = $._encodeBoolean;


/* eslint-enable */
