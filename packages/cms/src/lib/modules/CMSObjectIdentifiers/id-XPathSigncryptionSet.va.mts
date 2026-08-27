/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary id_XPathSigncryptionSet
 * @description
 *
 * OID for the XPath signcryption manifest type (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-XPathSigncryptionSet OID ::= { signcryption-manifest xPathSigncryptionSet(2) }
 * ```
 *
 * @constant
 */
export const id_XPathSigncryptionSet: OID = _OID.fromParts(
    [/* xPathSigncryptionSet */ 2],
    signcryption_manifest
);

/* eslint-enable */
