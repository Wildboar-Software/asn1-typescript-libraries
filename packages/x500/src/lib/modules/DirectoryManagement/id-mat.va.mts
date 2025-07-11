/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va.mjs";
/**
 * @summary id_mat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mat OBJECT IDENTIFIER ::= {id-mgt 1}
 * ```
 *
 * @constant
 */
export const id_mat: OBJECT_IDENTIFIER = _OID.fromParts([1], id_mgt);

/* eslint-enable */
