/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regInfo } from "../PKIXCRMF-2009/id-regInfo.va.mjs";

/**
 * @summary id_regInfo_certReq
 * @description
 *
 * OID for `certReq` regInfo: `{ id-regInfo 2 }`
 * ([RFC 4211 §7.2](https://datatracker.ietf.org/doc/html/rfc4211#section-7.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regInfo-certReq       OBJECT IDENTIFIER ::= { id-regInfo 2 }
 * ```
 *
 * @constant
 */
export const id_regInfo_certReq: OBJECT_IDENTIFIER = _OID.fromParts([2], id_regInfo);

/* eslint-enable */
