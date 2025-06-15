/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
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
export const id_ct_authData: OID = new _OID([/* ct */ 1, 2], smime);

/* eslint-enable */
