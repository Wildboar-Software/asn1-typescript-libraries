/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary dsp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsp ID ::= {module dsp(12) 3}
 * ```
 * 
 * @constant
 */
export
const dsp: ID = _OID.fromParts([
    /* dsp */ 12,
    3,
], module_);

/* eslint-enable */
