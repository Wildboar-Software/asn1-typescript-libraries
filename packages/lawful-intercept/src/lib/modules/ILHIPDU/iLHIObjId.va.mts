/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";
// export { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";


/**
 * @summary iLHIObjId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iLHIObjId         OBJECT IDENTIFIER ::= {iLHIDomainId ilhiPdu(0) version2(2)}
 * ```
 * 
 * @constant
 */
export
const iLHIObjId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ilhiPdu */ 0,
    /* version2 */ 2,
], iLHIDomainId);

/* eslint-enable */
