/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type Operations,
    _decode_Operations,
    _encode_Operations,
} from "../PKCS-15/Operations.ta.mjs";

/**
 * @summary PublicKeyOperations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PublicKeyOperations  ::=  Operations
 * ```
 */
export type PublicKeyOperations = Operations; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeyOperations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PublicKeyOperations} The decoded data structure.
 */
export const _decode_PublicKeyOperations: $.ASN1Decoder<PublicKeyOperations> = _decode_Operations;

/**
 * @summary Encodes a(n) PublicKeyOperations into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeyOperations, encoded as an ASN.1 Element.
 */
export const _encode_PublicKeyOperations: $.ASN1Encoder<PublicKeyOperations> = _encode_Operations;


/* eslint-enable */
