/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary directoryManagement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryManagement ID ::= {module directoryManagement(27) 1}
 * ```
 * 
 * @constant
 */
export
const directoryManagement: ID = _OID.fromParts([
    /* directoryManagement */ 27,
    1,
], module_);

/* eslint-enable */
