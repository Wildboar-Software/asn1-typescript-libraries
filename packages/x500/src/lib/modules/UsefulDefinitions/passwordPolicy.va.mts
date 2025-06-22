/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary passwordPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * passwordPolicy                           ID ::= {module passwordPolicy(39) 9}
 * ```
 *
 * @constant
 */
export const passwordPolicy: ID = _OID.fromParts(
    [/* passwordPolicy */ 39, 9],
    module_
);

/* eslint-enable */
