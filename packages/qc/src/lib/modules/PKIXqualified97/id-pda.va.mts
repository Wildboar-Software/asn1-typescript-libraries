/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";


/**
 * @summary id_pda
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda  OBJECT IDENTIFIER ::= { id-pkix 9 }
 * ```
 *
 * @constant
 */
export const id_pda: OBJECT_IDENTIFIER = _OID.fromParts([9], id_pkix);

/* eslint-enable */
