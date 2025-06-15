/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { id_signcryptedData } from "../CMSObjectIdentifiers/id-signcryptedData.va.mjs";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";

/**
 * @summary signcryption_manifest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryption-manifest OID ::= { id-signcryptedData manifest(1) }
 * ```
 *
 * @constant
 */
export const signcryption_manifest: OID = new _OID(
    [/* manifest */ 1],
    id_signcryptedData
);

/* eslint-enable */
