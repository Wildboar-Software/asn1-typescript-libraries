/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary upperBounds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * upperBounds ID ::= {module upperBounds(10) 3}
 * ```
 * 
 * @constant
 */
export
const upperBounds: ID = _OID.fromParts([
    /* upperBounds */ 10,
    3,
], module_);

/* eslint-enable */
