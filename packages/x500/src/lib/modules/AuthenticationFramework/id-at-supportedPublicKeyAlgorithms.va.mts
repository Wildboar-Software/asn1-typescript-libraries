/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "asn1-ts";
import { id_at } from "../UsefulDefinitions/id-at.va.mjs";
/**
 * @summary id_at_supportedPublicKeyAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-supportedPublicKeyAlgorithms  OBJECT IDENTIFIER ::= {id-at 103}
 * ```
 *
 * @constant
 */
export const id_at_supportedPublicKeyAlgorithms: OBJECT_IDENTIFIER = _OID.fromParts(
    [103],
    id_at
);

/* eslint-enable */
