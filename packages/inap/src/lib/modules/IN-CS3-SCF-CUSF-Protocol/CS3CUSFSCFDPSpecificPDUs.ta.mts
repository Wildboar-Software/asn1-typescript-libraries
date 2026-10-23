/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary CS3CUSFSCFDPSpecificPDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS3CUSFSCFDPSpecificPDUs  ::= 
 *   TCMessage{{CUSFSCFDPSpecific-Invokable}, {CUSFSCFDPSpecific-Returnable}}
 * ```
 */
export
type CS3CUSFSCFDPSpecificPDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CS3CUSFSCFDPSpecificPDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CS3CUSFSCFDPSpecificPDUs: $.ASN1Decoder<CS3CUSFSCFDPSpecificPDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) CS3CUSFSCFDPSpecificPDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS3CUSFSCFDPSpecificPDUs, encoded as an ASN.1 Element.
 */
export const _encode_CS3CUSFSCFDPSpecificPDUs: $.ASN1Encoder<CS3CUSFSCFDPSpecificPDUs> = _encode_TCMessage;


/* eslint-enable */
