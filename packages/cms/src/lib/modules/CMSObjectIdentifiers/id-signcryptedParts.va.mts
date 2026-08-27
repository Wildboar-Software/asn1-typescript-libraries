/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary id_signcryptedParts
 * @description
 *
 * OID for signcrypted-parts manifest usage (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signcryptedParts OID ::= { signcryption-manifest signcryptedParts(1) }
 * ```
 *
 * @constant
 */
export const id_signcryptedParts: OID = _OID.fromParts(
    [/* signcryptedParts */ 1],
    signcryption_manifest
);

/* eslint-enable */
