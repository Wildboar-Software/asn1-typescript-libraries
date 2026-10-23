/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/SelectedAttributeTypes";

/**
 * @summary SecurityPolicyName
 * @description
 *
 * Display name of an equivalent security policy.
 * `DirectoryString` SIZE 1..256 (`ubObjectIdNameLength`). ITU-T
 * Rec. X.841 (10/2000)
 * [§6.2.2.8](https://www.itu.int/rec/T-REC-X.841-200010-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityPolicyName  ::=  DirectoryString{ubObjectIdNameLength}
 * ```
 */
export type SecurityPolicyName = DirectoryString; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityPolicyName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityPolicyName} The decoded data structure.
 */
export const _decode_SecurityPolicyName: $.ASN1Decoder<SecurityPolicyName> = _decode_DirectoryString;

/**
 * @summary Encodes a(n) SecurityPolicyName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityPolicyName, encoded as an ASN.1 Element.
 */
export const _encode_SecurityPolicyName: $.ASN1Encoder<SecurityPolicyName> = _encode_DirectoryString;


/* eslint-enable */
