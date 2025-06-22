/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va.mjs";
/**
 * @summary id_certReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certReq              OBJECT IDENTIFIER ::= {id-cmsct 0}
 * ```
 *
 * @constant
 */
export const id_certReq: OBJECT_IDENTIFIER = _OID.fromParts([0], id_cmsct);

/* eslint-enable */
