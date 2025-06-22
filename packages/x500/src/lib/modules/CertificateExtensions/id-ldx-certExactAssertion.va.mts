/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ldx } from "../UsefulDefinitions/id-ldx.va.mjs";
/**
 * @summary id_ldx_certExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ldx-certExactAssertion         OBJECT IDENTIFIER ::= {id-ldx 1}
 * ```
 *
 * @constant
 */
export const id_ldx_certExactAssertion: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_ldx
);

/* eslint-enable */
