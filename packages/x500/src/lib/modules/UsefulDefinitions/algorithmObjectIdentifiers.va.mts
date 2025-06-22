/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary algorithmObjectIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * algorithmObjectIdentifiers               ID ::= {module algorithmObjectIdentifiers(8) 9}
 * ```
 *
 * @constant
 */
export const algorithmObjectIdentifiers: ID = _OID.fromParts(
    [/* algorithmObjectIdentifiers */ 8, 9],
    module_
);

/* eslint-enable */
