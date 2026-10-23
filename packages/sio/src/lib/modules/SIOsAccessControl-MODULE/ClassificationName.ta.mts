/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";


/**
 * @summary ClassificationName
 * @description
 *
 * Display string for a classification when selecting or viewing
 * it in a security label. `DirectoryString` SIZE 1..256
 * (`ubClassificationNameLength`). ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.6](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassificationName  ::=  DirectoryString{ubClassificationNameLength}
 * ```
 */
export type ClassificationName = DirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ClassificationName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassificationName} The decoded data structure.
 */
export const _decode_ClassificationName: $.ASN1Decoder<ClassificationName> = _decode_DirectoryString;

/**
 * @summary Encodes a(n) ClassificationName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassificationName, encoded as an ASN.1 Element.
 */
export const _encode_ClassificationName: $.ASN1Encoder<ClassificationName> = _encode_DirectoryString;


/* eslint-enable */
