/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { signcryption_mode } from "../CMSObjectIdentifiers/signcryption-mode.va.mjs";

/**
 * @summary signcrypted_envelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signcrypted-envelope OID ::= { signcryption-mode enveloped(4) }
 * ```
 *
 * @constant
 */
export const signcrypted_envelope: OID = new _OID(
    [/* enveloped */ 4],
    signcryption_mode
);

/* eslint-enable */
