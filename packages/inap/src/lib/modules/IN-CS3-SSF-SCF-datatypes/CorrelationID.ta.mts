/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";


/**
 * @summary CorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationID  ::=  Digits
 * ```
 */
export
type CorrelationID = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_CorrelationID: $.ASN1Decoder<CorrelationID> = _decode_Digits;

/**
 * @summary Encodes a(n) CorrelationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationID, encoded as an ASN.1 Element.
 */
export const _encode_CorrelationID: $.ASN1Encoder<CorrelationID> = _encode_Digits;


/* eslint-enable */
