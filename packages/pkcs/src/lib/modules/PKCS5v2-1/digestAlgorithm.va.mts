/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { rsadsi } from "../PKCS5v2-1/rsadsi.va.mjs";

/**
 * @summary digestAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digestAlgorithm OBJECT IDENTIFIER ::= {rsadsi 2}
 * ```
 *
 * @constant
 */
export const digestAlgorithm: OBJECT_IDENTIFIER = _OID.fromParts([2], rsadsi);

/* eslint-enable */
