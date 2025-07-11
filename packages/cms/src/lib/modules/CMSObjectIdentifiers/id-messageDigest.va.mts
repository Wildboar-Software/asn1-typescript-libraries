/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va.mjs";

/**
 * @summary id_messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageDigest OID ::= { pkcs9 messageDigest(4) }
 * ```
 *
 * @constant
 */
export const id_messageDigest: OID = _OID.fromParts([/* messageDigest */ 4], pkcs9);

/* eslint-enable */
