/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary dap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dap ID ::= {module dap(11) 3}
 * ```
 * 
 * @constant
 */
export
const dap: ID = _OID.fromParts([
    /* dap */ 11,
    3,
], module_);

/* eslint-enable */
