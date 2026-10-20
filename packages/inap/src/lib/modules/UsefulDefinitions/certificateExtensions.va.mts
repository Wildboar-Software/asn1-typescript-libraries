/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary certificateExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateExtensions ID ::= {module certificateExtensions(26) 0}
 * ```
 * 
 * @constant
 */
export
const certificateExtensions: ID = _OID.fromParts([
    /* certificateExtensions */ 26,
    0,
], module_);

/* eslint-enable */
