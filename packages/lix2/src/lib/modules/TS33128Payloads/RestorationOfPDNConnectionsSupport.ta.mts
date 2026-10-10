/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RestorationOfPDNConnectionsSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestorationOfPDNConnectionsSupport  ::=  BOOLEAN
 * ```
 */
export
type RestorationOfPDNConnectionsSupport = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) RestorationOfPDNConnectionsSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RestorationOfPDNConnectionsSupport = $._decodeBoolean;

/**
 * @summary Encodes a(n) RestorationOfPDNConnectionsSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestorationOfPDNConnectionsSupport, encoded as an ASN.1 Element.
 */
export const _encode_RestorationOfPDNConnectionsSupport = $._encodeBoolean;


/* eslint-enable */
