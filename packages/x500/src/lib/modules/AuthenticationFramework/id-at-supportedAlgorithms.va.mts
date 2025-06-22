/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_supportedAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedAlgorithms           OBJECT IDENTIFIER ::= {id-at 52}
 * ```
 *
 * @constant
 */
export const id_at_supportedAlgorithms: OBJECT_IDENTIFIER = _OID.fromParts(
    [52],
    id_at
);

/* eslint-enable */
