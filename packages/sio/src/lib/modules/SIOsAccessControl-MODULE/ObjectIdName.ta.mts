/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary ObjectIdName
 * @description
 *
 * Display name of an object identified by OID (typically a
 * security policy). `DirectoryString` SIZE 1..256
 * (`ubObjectIdNameLength`). ITU-T Rec. X.841 (10/2000)
 * [§6.2.2.3](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectIdName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type ObjectIdName = DirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectIdName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectIdName} The decoded data structure.
 */
export const _decode_ObjectIdName: $.ASN1Decoder<ObjectIdName> = _decode_DirectoryString;

/**
 * @summary Encodes a(n) ObjectIdName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectIdName, encoded as an ASN.1 Element.
 */
export const _encode_ObjectIdName: $.ASN1Encoder<ObjectIdName> = _encode_DirectoryString;


/* eslint-enable */
