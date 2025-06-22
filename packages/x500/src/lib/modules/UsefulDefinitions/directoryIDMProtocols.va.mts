/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryIDMProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryIDMProtocols                    ID ::= {module directoryIDMProtocols(31) 9}
 * ```
 *
 * @constant
 */
export const directoryIDMProtocols: ID = _OID.fromParts(
    [/* directoryIDMProtocols */ 31, 9],
    module_
);

/* eslint-enable */
