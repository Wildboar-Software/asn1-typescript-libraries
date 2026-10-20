/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary disp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * disp ID ::= {module disp(16) 3}
 * ```
 * 
 * @constant
 */
export
const disp: ID = _OID.fromParts([
    /* disp */ 16,
    3,
], module_);

/* eslint-enable */
