/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary dap
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * dap                                      ID ::= {module dap(11) 9}
 * ```
 *
 * @constant
 */
export const dap: ID = _OID.fromParts([/* dap */ 11, 9], module_);

/* eslint-enable */
