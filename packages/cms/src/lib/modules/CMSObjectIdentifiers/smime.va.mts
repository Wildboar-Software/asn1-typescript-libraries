/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va.mjs";

/**
 * @summary smime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * smime OID ::= { pkcs9 smime(16) }
 * ```
 *
 * @constant
 */
export const smime: OID = _OID.fromParts([/* smime */ 16], pkcs9);

/* eslint-enable */
