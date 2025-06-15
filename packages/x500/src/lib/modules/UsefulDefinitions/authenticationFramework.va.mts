/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary authenticationFramework
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * authenticationFramework                  ID ::= {module authenticationFramework(7) 9}
 * ```
 *
 * @constant
 */
export const authenticationFramework: ID = new _OID(
    [/* authenticationFramework */ 7, 9],
    module_
);

/* eslint-enable */
