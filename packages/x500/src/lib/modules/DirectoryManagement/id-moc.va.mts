/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va.mjs";
/**
 * @summary id_moc
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-moc OBJECT IDENTIFIER ::= {id-mgt 2}
 * ```
 *
 * @constant
 */
export const id_moc: OBJECT_IDENTIFIER = _OID.fromParts([2], id_mgt);

/* eslint-enable */
