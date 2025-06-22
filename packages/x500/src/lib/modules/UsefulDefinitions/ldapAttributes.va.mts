/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary ldapAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ldapAttributes                           ID ::= {module ldapAttributes(34) 9}
 * ```
 *
 * @constant
 */
export const ldapAttributes: ID = _OID.fromParts(
    [/* ldapAttributes */ 34, 9],
    module_
);

/* eslint-enable */
