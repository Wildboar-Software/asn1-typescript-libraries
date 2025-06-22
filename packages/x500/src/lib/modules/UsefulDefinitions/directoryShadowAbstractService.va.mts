/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryShadowAbstractService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryShadowAbstractService           ID ::= {module directoryShadowAbstractService(15) 9}
 * ```
 *
 * @constant
 */
export const directoryShadowAbstractService: ID = _OID.fromParts(
    [/* directoryShadowAbstractService */ 15, 9],
    module_
);

/* eslint-enable */
