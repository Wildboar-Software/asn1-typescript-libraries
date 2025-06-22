/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { rsadsi } from "../AlgorithmObjectIdentifiers/rsadsi.va.mjs";
/**
 * @summary pkcs_1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkcs-1                  ID ::= { rsadsi pkcs(1) pkcs-1(1) }
 * ```
 *
 * @constant
 */
export const pkcs_1: ID = _OID.fromParts([/* pkcs */ 1, /* pkcs-1 */ 1], rsadsi);

/* eslint-enable */
