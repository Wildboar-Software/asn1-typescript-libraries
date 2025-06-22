/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary operationalBindingOIDs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * operationalBindingOIDs                ID ::= {module 25}
 * ```
 *
 * @constant
 */
export const operationalBindingOIDs: ID = _OID.fromParts([25], module_);

/* eslint-enable */
