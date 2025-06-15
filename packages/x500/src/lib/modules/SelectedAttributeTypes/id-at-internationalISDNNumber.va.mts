/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_internationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-internationalISDNNumber             OBJECT IDENTIFIER ::= {id-at 25}
 * ```
 *
 * @constant
 */
export const id_at_internationalISDNNumber: OBJECT_IDENTIFIER = new _OID(
    [25],
    id_at
);

/* eslint-enable */
