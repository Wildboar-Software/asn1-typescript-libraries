/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/**
 * @summary id_envelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-envelopedData OID ::= { pkcs7 envelopedData (3) }
 * ```
 *
 * @constant
 */
export const id_envelopedData: OID = _OID.fromParts([/* envelopedData */ 3], pkcs7);

/* eslint-enable */
