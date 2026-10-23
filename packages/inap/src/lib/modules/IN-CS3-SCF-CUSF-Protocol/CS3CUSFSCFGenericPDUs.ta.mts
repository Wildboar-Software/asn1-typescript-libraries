/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CS3CUSFSCFGenericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS3CUSFSCFGenericPDUs  ::= 
 *   TCMessage{{CUSFSCFGeneric-Invokable}, {CUSFSCFGeneric-Returnable}}
 * ```
 */
export
type CS3CUSFSCFGenericPDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CS3CUSFSCFGenericPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CS3CUSFSCFGenericPDUs: $.ASN1Decoder<CS3CUSFSCFGenericPDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) CS3CUSFSCFGenericPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS3CUSFSCFGenericPDUs, encoded as an ASN.1 Element.
 */
export const _encode_CS3CUSFSCFGenericPDUs: (value: CS3CUSFSCFGenericPDUs, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TCMessage;


/* eslint-enable */
