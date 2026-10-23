/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary IPRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPRoutingAddress  ::= 
 *   CalledPartyNumber
 * ```
 */
export
type IPRoutingAddress = CalledPartyNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IPRoutingAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IPRoutingAddress: $.ASN1Decoder<IPRoutingAddress> = _decode_CalledPartyNumber;

/**
 * @summary Encodes a(n) IPRoutingAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPRoutingAddress, encoded as an ASN.1 Element.
 */
export const _encode_IPRoutingAddress: (value: IPRoutingAddress, elGetter: $.ASN1Encoder<any>) => _Element = _encode_CalledPartyNumber;


/* eslint-enable */
