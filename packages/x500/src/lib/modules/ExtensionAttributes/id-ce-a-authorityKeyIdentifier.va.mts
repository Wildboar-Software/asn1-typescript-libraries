/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ce } from "../UsefulDefinitions/id-ce.va.mjs";
/**
 * @summary id_ce_a_authorityKeyIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ce-a-authorityKeyIdentifier             OBJECT IDENTIFIER ::= {id-ce 35 1}
 * ```
 *
 * @constant
 */
export const id_ce_a_authorityKeyIdentifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [35, 1],
    id_ce
);

/* eslint-enable */
