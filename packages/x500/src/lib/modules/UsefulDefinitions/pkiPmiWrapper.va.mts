/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary pkiPmiWrapper
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPmiWrapper                            ID ::= {module pkiPmiWrapper(42) 9}
 * ```
 *
 * @constant
 */
export const pkiPmiWrapper: ID = _OID.fromParts([/* pkiPmiWrapper */ 42, 9], module_);

/* eslint-enable */
