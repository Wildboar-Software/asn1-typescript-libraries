/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary X520name
 * @description
 *
 * DirectoryString CHOICE for the X.520 `name` attribute type ([RFC 5280 Appendix A](https://datatracker.ietf.org/doc/html/rfc5280#appendix-A); [RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X520name  ::=  DirectoryString {ub-name}
 * ```
 */
export type X520name = DirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) X520name
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X520name} The decoded data structure.
 */
export const _decode_X520name: $.ASN1Decoder<X520name> = _decode_DirectoryString;

/**
 * @summary Encodes a(n) X520name into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X520name, encoded as an ASN.1 Element.
 */
export const _encode_X520name: $.ASN1Encoder<X520name> = _encode_DirectoryString;


/* eslint-enable */
