/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary AssistingSSPIPRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssistingSSPIPRoutingAddress  ::= 
 *   Digits
 * ```
 */
export
type AssistingSSPIPRoutingAddress = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AssistingSSPIPRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AssistingSSPIPRoutingAddress: $.ASN1Decoder<AssistingSSPIPRoutingAddress> = _decode_Digits;

/**
 * @summary Encodes a(n) AssistingSSPIPRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssistingSSPIPRoutingAddress, encoded as an ASN.1 Element.
 */
export const _encode_AssistingSSPIPRoutingAddress: $.ASN1Encoder<AssistingSSPIPRoutingAddress> = _encode_Digits;


/* eslint-enable */
