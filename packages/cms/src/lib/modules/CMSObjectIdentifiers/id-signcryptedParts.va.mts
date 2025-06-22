/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary id_signcryptedParts
 * @description
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
