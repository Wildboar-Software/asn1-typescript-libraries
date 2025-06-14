/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_pkip } from "../PKIXCRMF-2009/id-pkip.va.mjs";

/**
 * @summary id_regCtrl
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regCtrl OBJECT IDENTIFIER ::= { id-pkip 1 }
 * ```
 *
 * @constant
 */
export const id_regCtrl: OBJECT_IDENTIFIER = new _OID([1], id_pkip);

/* eslint-enable */
