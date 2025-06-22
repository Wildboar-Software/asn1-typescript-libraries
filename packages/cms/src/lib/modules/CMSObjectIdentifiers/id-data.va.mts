/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs7 } from "../CMSObjectIdentifiers/pkcs7.va.mjs";

/**
 * @summary id_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-data OID ::= { pkcs7 data(1) }
 * ```
 *
 * @constant
 */
export const id_data: OID = _OID.fromParts([/* data */ 1], pkcs7);

/* eslint-enable */
