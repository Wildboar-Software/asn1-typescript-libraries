/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary basicAccessControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * basicAccessControl ID ::= {module basicAccessControl(24) 3}
 * ```
 * 
 * @constant
 */
export
const basicAccessControl: ID = _OID.fromParts([
    /* basicAccessControl */ 24,
    3,
], module_);

/* eslint-enable */
