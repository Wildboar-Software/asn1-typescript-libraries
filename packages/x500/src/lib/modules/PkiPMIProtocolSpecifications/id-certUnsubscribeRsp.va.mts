/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va.mjs";
/**
 * @summary id_certUnsubscribeRsp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUnsubscribeRsp   OBJECT IDENTIFIER ::= {id-cmsct 14}
 * ```
 *
 * @constant
 */
export const id_certUnsubscribeRsp: OBJECT_IDENTIFIER = _OID.fromParts(
    [14],
    id_cmsct
);

/* eslint-enable */
