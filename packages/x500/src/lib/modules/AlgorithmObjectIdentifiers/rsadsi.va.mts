/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary rsadsi
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * rsadsi                  ID ::= { iso(1) member-body(2) us(840) rsadsi(113549) }
 * ```
 *
 * @constant
 */
export const rsadsi: ID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
]);

/* eslint-enable */
