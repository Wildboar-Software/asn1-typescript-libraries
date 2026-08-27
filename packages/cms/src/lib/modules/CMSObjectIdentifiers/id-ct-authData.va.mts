/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { smime } from "../CMSObjectIdentifiers/smime.va.mjs";

/**
 * @summary id_ct_authData
 * @description
 *
 * OID for CMS `authenticated-data` (`id-ct-authData`)
 * ([RFC 5652 §9.1](https://datatracker.ietf.org/doc/html/rfc5652#section-9.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-authData OID ::= { smime ct(1) 2 }
 * ```
 *
 * @constant
 */
export const id_ct_authData: OID = _OID.fromParts([/* ct */ 1, 2], smime);

/* eslint-enable */
