/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_mgt } from "../UsefulDefinitions/id-mgt.va.mjs";
/**
 * @summary id_mp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mp OBJECT IDENTIFIER ::= {id-mgt 4}
 * ```
 *
 * @constant
 */
export const id_mp: OBJECT_IDENTIFIER = _OID.fromParts([4], id_mgt);

/* eslint-enable */
