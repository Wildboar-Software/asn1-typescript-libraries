/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { rsadsi } from "../PKCS-12/rsadsi.va.mjs";

/**
 * @summary pkcs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs    OBJECT IDENTIFIER ::= {rsadsi pkcs(1)}
 * ```
 *
 * @constant
 */
export const pkcs: OBJECT_IDENTIFIER = _OID.fromParts([/* pkcs */ 1], rsadsi);

/* eslint-enable */
