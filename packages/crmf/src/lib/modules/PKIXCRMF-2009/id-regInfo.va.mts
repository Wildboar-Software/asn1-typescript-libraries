/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkip } from "../PKIXCRMF-2009/id-pkip.va.mjs";

/**
 * @summary id_regInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regInfo OBJECT IDENTIFIER ::= { id-pkip 2 }
 * ```
 *
 * @constant
 */
export const id_regInfo: OBJECT_IDENTIFIER = _OID.fromParts([2], id_pkip);

/* eslint-enable */
