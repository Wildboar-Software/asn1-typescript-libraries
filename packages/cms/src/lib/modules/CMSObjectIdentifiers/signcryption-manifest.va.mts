/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { id_signcryptedData } from "../CMSObjectIdentifiers/id-signcryptedData.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary signcryption_manifest
 * @description
 *
 * Signcryption manifest OID arc (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryption-manifest OID ::= { id-signcryptedData manifest(1) }
 * ```
 *
 * @constant
 */
export const signcryption_manifest: OID = _OID.fromParts(
    [/* manifest */ 1],
    id_signcryptedData
);

/* eslint-enable */
