/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary authenticationFramework
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authenticationFramework ID ::= {module authenticationFramework(7) 3}
 * ```
 * 
 * @constant
 */
export
const authenticationFramework: ID = _OID.fromParts([
    /* authenticationFramework */ 7,
    3,
], module_);

/* eslint-enable */
