/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_a_expiredCertsOnCRL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-expiredCertsOnCRL                  OBJECT IDENTIFIER ::= {id-ce 60 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_expiredCertsOnCRL: OBJECT_IDENTIFIER = _OID.fromParts(
    [60, 1],
    id_ce
);

/* eslint-enable */
