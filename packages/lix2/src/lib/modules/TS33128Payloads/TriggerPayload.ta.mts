/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerPayload  ::=  OCTET STRING
 * ```
 */
export
type TriggerPayload = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TriggerPayload = $._decodeOctetString;

/**
 * @summary Encodes a(n) TriggerPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerPayload, encoded as an ASN.1 Element.
 */
export const _encode_TriggerPayload = $._encodeOctetString;


/* eslint-enable */
