/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_content
 * @description
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
