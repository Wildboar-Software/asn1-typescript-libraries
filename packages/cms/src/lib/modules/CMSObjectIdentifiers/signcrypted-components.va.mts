/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-components OID ::= { signcryption-mode components(3) }
 * ```
 *
 * @constant
 */
export const signcrypted_components: OID = _OID.fromParts(
    [/* components */ 3],
    signcryption_mode
);

/* eslint-enable */
