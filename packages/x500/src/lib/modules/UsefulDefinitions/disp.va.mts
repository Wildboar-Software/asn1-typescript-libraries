/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary disp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * disp                                     ID ::= {module disp(16) 7}
 * ```
 *
 * @constant
 */
export const disp: ID = _OID.fromParts([/* disp */ 16, 7], module_);

/* eslint-enable */
