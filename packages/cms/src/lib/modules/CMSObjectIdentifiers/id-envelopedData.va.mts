/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/**
 * @summary id_envelopedData
 * @description
 *
 * OID for CMS `enveloped-data` ([RFC 5652 §6.1](https://datatracker.ietf.org/doc/html/rfc5652#section-6.1)).
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
