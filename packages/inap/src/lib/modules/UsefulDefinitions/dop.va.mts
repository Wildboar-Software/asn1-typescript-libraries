/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary dop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dop ID ::= {module dop(17) 3}
 * ```
 * 
 * @constant
 */
export
const dop: ID = _OID.fromParts([
    /* dop */ 17,
    3,
], module_);

/* eslint-enable */
