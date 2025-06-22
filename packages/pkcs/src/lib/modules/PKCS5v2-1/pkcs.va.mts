/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { rsadsi } from "../PKCS5v2-1/rsadsi.va.mjs";

/**
 * @summary pkcs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs   OBJECT IDENTIFIER ::= {rsadsi 1}
 * ```
 *
 * @constant
 */
export const pkcs: OBJECT_IDENTIFIER = _OID.fromParts([1], rsadsi);

/* eslint-enable */
