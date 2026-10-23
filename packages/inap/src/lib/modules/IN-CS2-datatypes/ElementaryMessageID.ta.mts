/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";


/**
 * @summary ElementaryMessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementaryMessageID  ::=  Integer4
 * ```
 */
export
type ElementaryMessageID = Integer4; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ElementaryMessageID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ElementaryMessageID: $.ASN1Decoder<ElementaryMessageID> = _decode_Integer4;

/**
 * @summary Encodes a(n) ElementaryMessageID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementaryMessageID, encoded as an ASN.1 Element.
 */
export const _encode_ElementaryMessageID: $.ASN1Encoder<ElementaryMessageID> = _encode_Integer4;


/* eslint-enable */
