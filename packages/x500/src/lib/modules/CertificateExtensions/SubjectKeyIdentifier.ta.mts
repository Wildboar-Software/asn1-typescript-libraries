/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type KeyIdentifier,
    _decode_KeyIdentifier,
    _encode_KeyIdentifier,
} from "../CertificateExtensions/KeyIdentifier.ta.mjs";
/**
 * @summary SubjectKeyIdentifier
 * @description
 *
 * Always non-critical. KeyIdentifier unique among keys of this subject.
 * Octet-for-octet comparison. Typical AKI.keyIdentifier of issued certs.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectKeyIdentifier  ::=  KeyIdentifier
 * ```
 */
export type SubjectKeyIdentifier = KeyIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectKeyIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectKeyIdentifier} The decoded data structure.
 */
export const _decode_SubjectKeyIdentifier: $.ASN1Decoder<SubjectKeyIdentifier> = _decode_KeyIdentifier;

/**
 * @summary Encodes a(n) SubjectKeyIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectKeyIdentifier, encoded as an ASN.1 Element.
 */
export const _encode_SubjectKeyIdentifier: $.ASN1Encoder<SubjectKeyIdentifier> = _encode_KeyIdentifier;


/* eslint-enable */
