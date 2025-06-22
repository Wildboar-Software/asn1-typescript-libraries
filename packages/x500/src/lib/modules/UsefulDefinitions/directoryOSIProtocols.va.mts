/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
/**
 * @summary directoryOSIProtocols
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * directoryOSIProtocols                    ID ::= {module directoryOSIProtocols(37) 9}
 * ```
 *
 * @constant
 */
export const directoryOSIProtocols: ID = _OID.fromParts(
    [/* directoryOSIProtocols */ 37, 9],
    module_
);

/* eslint-enable */
