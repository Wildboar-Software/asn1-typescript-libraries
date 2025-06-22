/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_a_delegatedNameConstraints
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-delegatedNameConstraints           OBJECT IDENTIFIER ::= {id-ce 42 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_delegatedNameConstraints: OBJECT_IDENTIFIER = _OID.fromParts(
    [42, 1],
    id_ce
);

/* eslint-enable */
