/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va.mjs";
/**
 * @summary id_certRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certRsp              OBJECT IDENTIFIER ::= {id-cmsct 1}
 * ```
 *
 * @constant
 */
export const id_certRsp: OBJECT_IDENTIFIER = new _OID([1], id_cmsct);

/* eslint-enable */
