/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS3-SSF-SCF-datatypes/LocationNumber.ta.mjs";


/**
 * @summary ChargeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeNumber  ::= 
 *   LocationNumber
 * ```
 */
export
type ChargeNumber = LocationNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ChargeNumber: $.ASN1Decoder<ChargeNumber> = _decode_LocationNumber;

/**
 * @summary Encodes a(n) ChargeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeNumber, encoded as an ASN.1 Element.
 */
export const _encode_ChargeNumber: $.ASN1Encoder<ChargeNumber> = _encode_LocationNumber;


/* eslint-enable */
