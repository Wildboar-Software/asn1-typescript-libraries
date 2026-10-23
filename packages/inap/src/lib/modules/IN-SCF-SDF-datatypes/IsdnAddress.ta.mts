/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";


/**
 * @summary IsdnAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IsdnAddress  ::=  Digits
 * ```
 */
export
type IsdnAddress = Digits; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IsdnAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IsdnAddress: $.ASN1Decoder<IsdnAddress> = _decode_Digits;

/**
 * @summary Encodes a(n) IsdnAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IsdnAddress, encoded as an ASN.1 Element.
 */
export const _encode_IsdnAddress: (value: IsdnAddress, elGetter: $.ASN1Encoder<any>) => _Element = _encode_Digits;


/* eslint-enable */
