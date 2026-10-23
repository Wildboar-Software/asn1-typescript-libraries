/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CUSFSCFGenericPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUSFSCFGenericPDUs  ::= 
 *   TCMessage{{CUSFSCFGeneric-Invokable}, {CUSFSCFGeneric-Returnable}}
 * ```
 */
export
type CUSFSCFGenericPDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CUSFSCFGenericPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CUSFSCFGenericPDUs: $.ASN1Decoder<CUSFSCFGenericPDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) CUSFSCFGenericPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUSFSCFGenericPDUs, encoded as an ASN.1 Element.
 */
export const _encode_CUSFSCFGenericPDUs: (value: CUSFSCFGenericPDUs, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TCMessage;


/* eslint-enable */
