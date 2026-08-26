/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { pkcs9 } from "../CMSObjectIdentifiers/pkcs9.va.mjs";

/**
 * @summary id_contentType
 * @description
 *
 * OID for the content-type attribute ([RFC 5652 §11.1](https://datatracker.ietf.org/doc/html/rfc5652#section-11.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contentType OID ::= { pkcs9 contentType(3) }
 * ```
 *
 * @constant
 */
export const id_contentType: OID = _OID.fromParts([/* contentType */ 3], pkcs9);

/* eslint-enable */
