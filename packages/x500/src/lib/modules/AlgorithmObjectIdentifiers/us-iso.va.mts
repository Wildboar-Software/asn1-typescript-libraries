/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary us_iso
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * us-iso                  ID ::= { iso(1) member-body(2) us(840) }
 * ```
 *
 * @constant
 */
export const us_iso: ID = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
]);

/* eslint-enable */
