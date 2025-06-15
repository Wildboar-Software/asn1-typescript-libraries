/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary dop
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dop                                      ID ::= {module dop(17) 7}
 * ```
 *
 * @constant
 */
export const dop: ID = new _OID([/* dop */ 17, 7], module_);

/* eslint-enable */
