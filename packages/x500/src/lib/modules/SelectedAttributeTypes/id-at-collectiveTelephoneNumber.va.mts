/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_collectiveTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectiveTelephoneNumber           OBJECT IDENTIFIER ::= {id-at 20 1}
 * ```
 *
 * @constant
 */
export const id_at_collectiveTelephoneNumber: OBJECT_IDENTIFIER = _OID.fromParts(
    [20, 1],
    id_at
);

/* eslint-enable */
