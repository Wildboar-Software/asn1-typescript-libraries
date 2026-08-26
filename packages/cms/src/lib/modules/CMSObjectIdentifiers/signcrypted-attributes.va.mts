/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_attributes
 * @description
 *
 * OID for signcrypted-attributes mode (ITU-T X.894 | ISO/IEC 24824-4 clause 7.2.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-attributes OID ::= { signcryption-mode attributes(2) }
 * ```
 *
 * @constant
 */
export const signcrypted_attributes: OID = _OID.fromParts(
    [/* attributes */ 2],
    signcryption_mode
);

/* eslint-enable */
