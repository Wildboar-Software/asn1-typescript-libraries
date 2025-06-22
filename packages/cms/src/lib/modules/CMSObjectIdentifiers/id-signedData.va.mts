/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/**
 * @summary id_signedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedData OID ::= { pkcs7 signedData(2) }
 * ```
 *
 * @constant
 */
export const id_signedData: OID = _OID.fromParts([/* signedData */ 2], pkcs7);

/* eslint-enable */
