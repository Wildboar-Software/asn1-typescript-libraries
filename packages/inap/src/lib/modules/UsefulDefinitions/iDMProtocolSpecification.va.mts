/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { ID } from "../UsefulDefinitions/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../UsefulDefinitions/ID.ta.mjs";
import { module_ } from "../UsefulDefinitions/module.va.mjs";
// export { module_ } from "../UsefulDefinitions/module.va.mjs";


/**
 * @summary iDMProtocolSpecification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iDMProtocolSpecification ID ::= {module iDMProtocolSpecification(30) 4}
 * ```
 * 
 * @constant
 */
export
const iDMProtocolSpecification: ID = _OID.fromParts([
    /* iDMProtocolSpecification */ 30,
    4,
], module_);

/* eslint-enable */
