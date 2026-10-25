/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary SCFCUSFGenericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFCUSFGenericPDUs  ::= 
 *   TCMessage{{SCFCUSFGeneric-Invokable}, {SCFCUSFGeneric-Returnable}}
 * ```
 */
export
type SCFCUSFGenericPDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SCFCUSFGenericPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SCFCUSFGenericPDUs: $.ASN1Decoder<SCFCUSFGenericPDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) SCFCUSFGenericPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCFCUSFGenericPDUs, encoded as an ASN.1 Element.
 */
export const _encode_SCFCUSFGenericPDUs: $.ASN1Encoder<SCFCUSFGenericPDUs> = _encode_TCMessage;


/* eslint-enable */
