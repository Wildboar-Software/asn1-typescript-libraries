/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS3-SSF-SCF-datatypes/Digits.ta.mjs";


/**
 * @summary AdditionalCallingPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCallingPartyNumber  ::=  Digits
 * ```
 */
export
type AdditionalCallingPartyNumber = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCallingPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalCallingPartyNumber: $.ASN1Decoder<AdditionalCallingPartyNumber> = _decode_Digits;

/**
 * @summary Encodes a(n) AdditionalCallingPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCallingPartyNumber, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalCallingPartyNumber: (value: AdditionalCallingPartyNumber, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Digits;


/* eslint-enable */
