/* eslint-disable */
import {
    type ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type GraphicStringBase,
    _decode_GraphicStringBase,
    _encode_GraphicStringBase,
} from "../X790ASN1Module/GraphicStringBase.ta.mjs";



/**
 * @summary ContactDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContactDetails  ::=  GraphicStringBase
 * ```
 */
export
type ContactDetails = GraphicStringBase; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ContactDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ContactDetails: $.ASN1Decoder<ContactDetails> = _decode_GraphicStringBase;

/**
 * @summary Encodes a(n) ContactDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContactDetails, encoded as an ASN.1 Element.
 */
export const _encode_ContactDetails: $.ASN1Encoder<ContactDetails> = _encode_GraphicStringBase;


/* eslint-enable */
