/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption } from "../CMSObjectIdentifiers/signcryption.va.mjs";

/**
 * @summary signcryption_mode
 * @description
 *
 * Signcryption processing-modes OID arc (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcryption-mode OID ::= { signcryption modes(1) }
 * ```
 *
 * @constant
 */
export const signcryption_mode: OID = _OID.fromParts([/* modes */ 1], signcryption);

/* eslint-enable */
