/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
/**
 * @summary MgtCommonName
 * @description
 *
 * `UnboundedDirectoryString` (not size-limited DirectoryString / PrintableString
 * CommonName). Naming attribute for Directory components. Empty string is empty
 * name content, not absent.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtCommonName  ::=  UnboundedDirectoryString
 * ```
 */
export type MgtCommonName = UnboundedDirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) MgtCommonName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MgtCommonName} The decoded data structure.
 */
export const _decode_MgtCommonName: $.ASN1Decoder<MgtCommonName> = _decode_UnboundedDirectoryString;

/**
 * @summary Encodes a(n) MgtCommonName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MgtCommonName, encoded as an ASN.1 Element.
 */
export const _encode_MgtCommonName: $.ASN1Encoder<MgtCommonName> = _encode_UnboundedDirectoryString;


/* eslint-enable */
