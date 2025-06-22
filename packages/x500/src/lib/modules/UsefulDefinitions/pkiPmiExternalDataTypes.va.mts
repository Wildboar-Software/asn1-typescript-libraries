/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary pkiPmiExternalDataTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pkiPmiExternalDataTypes                  ID ::= {module pkiPmiExternalDataTypes(40) 9}
 * ```
 *
 * @constant
 */
export const pkiPmiExternalDataTypes: ID = _OID.fromParts(
    [/* pkiPmiExternalDataTypes */ 40, 9],
    module_
);

/* eslint-enable */
