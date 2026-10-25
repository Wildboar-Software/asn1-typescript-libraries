/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary AssistHandoffSSF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistHandoffSSF-SCF-PDUs  ::= 
 *   TCMessage
 *     {{AssistHandoffSsfToScfInvokable}, {AssistHandoffSsfToScfReturnable}}
 * ```
 */
export
type AssistHandoffSSF_SCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssistHandoffSSF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssistHandoffSSF_SCF_PDUs: $.ASN1Decoder<AssistHandoffSSF_SCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) AssistHandoffSSF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistHandoffSSF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_AssistHandoffSSF_SCF_PDUs: $.ASN1Encoder<AssistHandoffSSF_SCF_PDUs> = _encode_TCMessage;


/* eslint-enable */
