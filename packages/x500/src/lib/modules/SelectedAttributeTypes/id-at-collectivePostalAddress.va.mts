/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_collectivePostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-collectivePostalAddress             OBJECT IDENTIFIER ::= {id-at 16 1}
 * ```
 *
 * @constant
 */
export const id_at_collectivePostalAddress: OBJECT_IDENTIFIER = _OID.fromParts(
    [16, 1],
    id_at
);

/* eslint-enable */
