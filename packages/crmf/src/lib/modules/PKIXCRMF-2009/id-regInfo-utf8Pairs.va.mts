/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_regInfo } from "../PKIXCRMF-2009/id-regInfo.va.mjs";

/**
 * @summary id_regInfo_utf8Pairs
 * @description
 *
 * OID for `utf8Pairs` regInfo: `{ id-regInfo 1 }`
 * ([RFC 4211 §7.1](https://datatracker.ietf.org/doc/html/rfc4211#section-7.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-regInfo-utf8Pairs    OBJECT IDENTIFIER ::= { id-regInfo 1 }
 * ```
 *
 * @constant
 */
export const id_regInfo_utf8Pairs: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_regInfo
);

/* eslint-enable */
