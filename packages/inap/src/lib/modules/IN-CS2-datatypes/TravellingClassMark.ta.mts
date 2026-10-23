/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";


/**
 * @summary TravellingClassMark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TravellingClassMark  ::=  LocationNumber
 * ```
 */
export
type TravellingClassMark = LocationNumber; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TravellingClassMark
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_TravellingClassMark: $.ASN1Decoder<TravellingClassMark> = _decode_LocationNumber;

/**
 * @summary Encodes a(n) TravellingClassMark into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TravellingClassMark, encoded as an ASN.1 Element.
 */
export const _encode_TravellingClassMark: $.ASN1Encoder<TravellingClassMark> = _encode_LocationNumber;


/* eslint-enable */
