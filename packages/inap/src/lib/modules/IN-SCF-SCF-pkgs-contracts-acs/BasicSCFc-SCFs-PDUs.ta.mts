/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BasicSCFc_SCFs_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicSCFc-SCFs-PDUs  ::= 
 *   TCMessage{{SCFc-SCFs-Invokable}, {SCFc-SCFs-Returnable}}
 * ```
 */
export
type BasicSCFc_SCFs_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BasicSCFc_SCFs_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BasicSCFc_SCFs_PDUs: $.ASN1Decoder<BasicSCFc_SCFs_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) BasicSCFc_SCFs_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicSCFc_SCFs_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_BasicSCFc_SCFs_PDUs: $.ASN1Encoder<BasicSCFc_SCFs_PDUs> = _encode_TCMessage;


/* eslint-enable */
