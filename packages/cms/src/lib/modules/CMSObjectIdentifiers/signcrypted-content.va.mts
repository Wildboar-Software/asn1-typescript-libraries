/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_content
 * @description
 *
 * OID for signcrypted-content mode (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-content OID ::= { signcryption-mode content(1) }
 * ```
 *
 * @constant
 */
export const signcrypted_content: OID = _OID.fromParts(
    [/* content */ 1],
    signcryption_mode
);

/* eslint-enable */
