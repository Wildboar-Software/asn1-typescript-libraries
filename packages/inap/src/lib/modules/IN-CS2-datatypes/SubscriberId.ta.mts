/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-CS2-datatypes/GenericNumber.ta.mjs";


/**
 * @summary SubscriberId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberId  ::= 
 *   GenericNumber
 * ```
 */
export
type SubscriberId = GenericNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SubscriberId: $.ASN1Decoder<SubscriberId> = _decode_GenericNumber;

/**
 * @summary Encodes a(n) SubscriberId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberId, encoded as an ASN.1 Element.
 */
export const _encode_SubscriberId: $.ASN1Encoder<SubscriberId> = _encode_GenericNumber;


/* eslint-enable */
