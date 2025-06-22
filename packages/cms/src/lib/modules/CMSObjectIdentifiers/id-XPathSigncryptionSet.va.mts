/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary id_XPathSigncryptionSet
 * @description
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
