/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_manifest } from "../CMSObjectIdentifiers/signcryption-manifest.va.mjs";

/**
 * @summary xPath
 * @description
 *
 * OID for XPath-based signcryption manifest (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * xPath OID ::= { signcryption-manifest xPath(0) }
 * ```
 *
 * @constant
 */
export const xPath: OID = _OID.fromParts([/* xPath */ 0], signcryption_manifest);

/* eslint-enable */
