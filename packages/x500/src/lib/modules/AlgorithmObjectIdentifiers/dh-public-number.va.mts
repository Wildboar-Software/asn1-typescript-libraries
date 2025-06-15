/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ansi_x9_42 } from "../AlgorithmObjectIdentifiers/ansi-x9-42.va.mjs";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
/**
 * @summary dh_public_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dh-public-number        ID ::= { ansi-x9-42 number-type(2) dh-public-number(1) }
 * ```
 *
 * @constant
 */
export const dh_public_number: ID = new _OID(
    [/* number-type */ 2, /* dh-public-number */ 1],
    ansi_x9_42
);

/* eslint-enable */
