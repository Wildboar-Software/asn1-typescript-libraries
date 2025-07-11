/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_certificateRevocationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-certificateRevocationList     OBJECT IDENTIFIER ::= {id-at 39}
 * ```
 *
 * @constant
 */
export const id_at_certificateRevocationList: OBJECT_IDENTIFIER = _OID.fromParts(
    [39],
    id_at
);

/* eslint-enable */
