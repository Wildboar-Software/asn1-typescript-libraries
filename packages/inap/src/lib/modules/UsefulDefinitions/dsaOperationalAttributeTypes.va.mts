/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary dsaOperationalAttributeTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dsaOperationalAttributeTypes ID ::= {module dsaOperationalAttributeTypes(22) 3}
 * ```
 * 
 * @constant
 */
export
const dsaOperationalAttributeTypes: ID = _OID.fromParts([
    /* dsaOperationalAttributeTypes */ 22,
    3,
], module_);

/* eslint-enable */
