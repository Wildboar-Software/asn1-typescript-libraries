/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary enhancedSecurity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * enhancedSecurity ID ::= {module enhancedSecurity(28) 1}
 * ```
 * 
 * @constant
 */
export
const enhancedSecurity: ID = _OID.fromParts([
    /* enhancedSecurity */ 28,
    1,
], module_);

/* eslint-enable */
