/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
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
export const us_iso: ID = new _OID([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
]);

/* eslint-enable */
