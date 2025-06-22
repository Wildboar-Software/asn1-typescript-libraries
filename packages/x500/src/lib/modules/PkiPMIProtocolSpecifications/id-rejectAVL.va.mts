/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va.mjs";
/**
 * @summary id_rejectAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rejectAVL            OBJECT IDENTIFIER ::= {id-cmsct 10}
 * ```
 *
 * @constant
 */
export const id_rejectAVL: OBJECT_IDENTIFIER = _OID.fromParts([10], id_cmsct);

/* eslint-enable */
