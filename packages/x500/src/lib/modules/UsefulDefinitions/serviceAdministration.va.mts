/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary serviceAdministration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdministration                    ID ::= {module serviceAdministration(33) 9}
 * ```
 *
 * @constant
 */
export const serviceAdministration: ID = _OID.fromParts(
    [/* serviceAdministration */ 33, 9],
    module_
);

/* eslint-enable */
