/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_cmsct } from "../UsefulDefinitions/id-cmsct.va.mjs";
/**
 * @summary id_certUnsubscribeReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-certUnsubscribeReq   OBJECT IDENTIFIER ::= {id-cmsct 13}
 * ```
 *
 * @constant
 */
export const id_certUnsubscribeReq: OBJECT_IDENTIFIER = _OID.fromParts(
    [13],
    id_cmsct
);

/* eslint-enable */
