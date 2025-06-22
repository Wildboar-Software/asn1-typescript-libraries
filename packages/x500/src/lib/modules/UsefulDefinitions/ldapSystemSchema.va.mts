/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary ldapSystemSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapSystemSchema                         ID ::= {module ldapSystemSchema(38) 9}
 * ```
 *
 * @constant
 */
export const ldapSystemSchema: ID = _OID.fromParts(
    [/* ldapSystemSchema */ 38, 9],
    module_
);

/* eslint-enable */
