/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/**
 * @summary id_digestedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-digestedData OID ::= { pkcs7 digestedData(5) }
 * ```
 *
 * @constant
 */
export const id_digestedData: OID = _OID.fromParts([/* digestedData */ 5], pkcs7);

/* eslint-enable */
