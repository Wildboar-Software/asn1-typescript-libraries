/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_components
 * @description
 *
 * OID for signcrypted-components mode (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.3).
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
