/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { OID } from "../CMSObjectIdentifiers/OID.ta.mjs";
import { smime } from "../CMSObjectIdentifiers/smime.va.mjs";

/**
 * @summary id_ct_authData
 * @description
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
