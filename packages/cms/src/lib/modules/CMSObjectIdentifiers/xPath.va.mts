/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary xPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPath OID ::= { signcryption-manifest xPath(0) }
 * ```
 *
 * @constant
 */
export const xPath: OID = new _OID([/* xPath */ 0], signcryption_manifest);

/* eslint-enable */
