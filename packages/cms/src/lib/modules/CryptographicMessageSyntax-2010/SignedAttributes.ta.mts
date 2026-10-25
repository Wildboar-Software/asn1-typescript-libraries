/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../CryptographicMessageSyntax-2010/Attributes.ta.mjs";

/**
 * @summary SignedAttributes
 * @description
 *
 * SET OF Attribute constrained to signed-attribute object sets — values
 * covered by the signature ([RFC 5652 §5.3](https://datatracker.ietf.org/doc/html/rfc5652#section-5.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes  ::=  Attributes {{ SignedAttributesSet }}
 * ```
 */
export type SignedAttributes = Attributes; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SignedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedAttributes} The decoded data structure.
 */
export const _decode_SignedAttributes: $.ASN1Decoder<SignedAttributes> = _decode_Attributes;

/**
 * @summary Encodes a(n) SignedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedAttributes, encoded as an ASN.1 Element.
 */
export const _encode_SignedAttributes: $.ASN1Encoder<SignedAttributes> = _encode_Attributes;


/* eslint-enable */
