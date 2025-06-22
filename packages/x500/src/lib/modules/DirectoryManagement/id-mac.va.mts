/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va.mjs";
/**
 * @summary id_mac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mac OBJECT IDENTIFIER ::= {id-mgt 0}
 * ```
 *
 * @constant
 */
export const id_mac: OBJECT_IDENTIFIER = _OID.fromParts([0], id_mgt);

/* eslint-enable */
