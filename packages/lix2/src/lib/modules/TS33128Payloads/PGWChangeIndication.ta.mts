/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PGWChangeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PGWChangeIndication  ::=  BOOLEAN
 * ```
 */
export
type PGWChangeIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) PGWChangeIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PGWChangeIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) PGWChangeIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PGWChangeIndication, encoded as an ASN.1 Element.
 */
export const _encode_PGWChangeIndication = $._encodeBoolean;


/* eslint-enable */
