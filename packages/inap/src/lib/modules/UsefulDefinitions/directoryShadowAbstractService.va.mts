/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary directoryShadowAbstractService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryShadowAbstractService ID ::= {module directoryShadowAbstractService(15) 3}
 * ```
 * 
 * @constant
 */
export
const directoryShadowAbstractService: ID = _OID.fromParts([
    /* directoryShadowAbstractService */ 15,
    3,
], module_);

/* eslint-enable */
