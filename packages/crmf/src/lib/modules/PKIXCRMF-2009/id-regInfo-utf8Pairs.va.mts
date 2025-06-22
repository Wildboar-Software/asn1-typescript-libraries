/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_regInfo } from "../PKIXCRMF-2009/id-regInfo.va.mjs";

/**
 * @summary id_regInfo_utf8Pairs
 * @description
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
