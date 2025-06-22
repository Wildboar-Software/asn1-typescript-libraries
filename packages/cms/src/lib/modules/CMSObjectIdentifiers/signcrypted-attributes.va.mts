/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_attributes
 * @description
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
