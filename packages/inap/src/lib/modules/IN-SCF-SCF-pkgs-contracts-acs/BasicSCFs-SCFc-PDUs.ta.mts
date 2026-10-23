/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary BasicSCFs_SCFc_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicSCFs-SCFc-PDUs  ::= 
 *   TCMessage{{SCFs-SCFc-Invokable}, {SCFs-SCFc-Returnable}}
 * ```
 */
export
type BasicSCFs_SCFc_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BasicSCFs_SCFc_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_BasicSCFs_SCFc_PDUs: $.ASN1Decoder<BasicSCFs_SCFc_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) BasicSCFs_SCFc_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicSCFs_SCFc_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_BasicSCFs_SCFc_PDUs: (value: BasicSCFs_SCFc_PDUs, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TCMessage;


/* eslint-enable */
