/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkix } from "../PKIX1Explicit88/id-pkix.va.mjs";


/**
 * @summary id_qcs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qcs  OBJECT IDENTIFIER ::= { id-pkix 11 }
 * ```
 *
 * @constant
 */
export const id_qcs: OBJECT_IDENTIFIER = _OID.fromParts([11], id_pkix);

/* eslint-enable */
